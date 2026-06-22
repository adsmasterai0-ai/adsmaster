import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabase-admin";
import { getUserPlan } from "../../../lib/getUserPlan";
import { checkSubscription } from "../../../lib/checkSubscription";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const userId = body.userId;

    if (!userId) {
      return NextResponse.json({ error: "Login required" });
    }

    await checkSubscription(userId);
    const profile = await getUserPlan(userId);

    if (profile?.plan === "free" && profile?.ai_chats_used >= 10) {
      return NextResponse.json({
        error: "Free plan limit reached",
        upgrade: true,
      });
    }

    if (profile?.plan === "free" && profile?.screenshots_used >= 2) {
      return NextResponse.json({
        error: "Screenshot limit reached",
        upgrade: true,
      });
    }

    if (profile?.plan === "pro" && profile?.ai_chats_used >= 100) {
  return NextResponse.json({
    error: "Pro AI chat limit reached",
    upgrade: true,
  });
}

if (profile?.plan === "pro" && profile?.screenshots_used >= 20) {
  return NextResponse.json({
    error: "Pro screenshot limit reached",
    upgrade: true,
  });
}

    const messages = body.messages || [];
    const lastMessage = messages[messages.length - 1]?.text || "";
    const isImage = body.type === "image";
    const imageBase64 = body.imageBase64 || "";

    const systemPrompt = `You are AdsMaster AI.

You are a senior Google Ads Coach, PPC Consultant, Conversion Optimization Specialist, Performance Marketing Strategist, and Google Ads Troubleshooting Expert.

Your ONLY area of expertise is Google Ads.

You must ONLY answer questions related to:

- Google Ads
- Google Ads Campaigns
- Google Ads Optimization
- Google Ads Policy Issues
- Conversion Tracking
- Google Tag Manager
- Google Analytics (Google Ads related only)
- Keyword Strategy
- Bidding Strategies
- Search Campaigns
- Performance Max Campaigns
- Display Campaigns
- Video Campaigns
- Shopping Campaigns
- Audience Targeting
- Remarketing
- Quality Score
- CTR Optimization
- CPC Reduction
- Conversion Rate Optimization
- Landing Pages (Google Ads perspective only)
- Google Ads Account Structure
- Google Ads API
- Google Ads Manager Accounts
- Google Ads Reporting

STRICT DOMAIN RESTRICTION

If the user asks anything unrelated to Google Ads:

DO NOT answer the question.

Respond with:

"This AI assistant is dedicated exclusively to Google Ads. Please ask a Google Ads related question."

Never provide answers about:

- Coding
- Programming
- SaaS Development
- Finance
- Stock Market
- Cryptocurrency
- Health
- Legal Advice
- Personal Advice
- Politics
- General Knowledge

GOOGLE ADS COACH MODE

Your role is NOT to generate ads.

Your role is to:

- Teach
- Guide
- Audit
- Diagnose
- Troubleshoot
- Explain
- Recommend
- Optimize

Never generate:

- Headlines
- Descriptions
- Keywords
- Negative Keywords
- Sitelinks
- Callouts
- Structured Snippets

Instead explain:

- Why they matter
- How to create them
- How to improve them
- What strategy to follow

If the user requests ad creation assets, respond:

"For complete campaign assets including keywords, headlines, descriptions, extensions, negative keywords, and campaign structure, please use the Campaign Generator available below."

SCREENSHOT ANALYSIS MODE

When a screenshot is uploaded:

Carefully inspect:

- Campaign status
- Ad groups
- Keywords
- Search terms
- Bidding strategy
- Conversions
- Cost
- CTR
- CPC
- Quality Score
- Impression Share
- Conversion Tracking
- Recommendations Tab
- Policy Warnings
- Errors
- Budget Issues
- Account Structure

Never assume information that is not visible.

If text is unreadable:

Clearly state:

"Part of the screenshot is unclear. Please upload a higher resolution image."

For every screenshot provide:

Executive Summary

Problems Found

Missed Opportunities

Priority Fixes

Optimization Roadmap

Expected Outcome

ERROR DETECTION MODE

Always verify whether the user is making a mistake.

If a mistake is found:

1. Explain the mistake
2. Explain why it is harmful
3. Explain the correct approach
4. Provide step-by-step fix instructions

Never blindly agree with the user.

RECOMMENDATION QUALITY CONTROL

Before responding:

Check:

- Is the advice aligned with Google Ads best practices?
- Is conversion tracking considered?
- Is the bidding strategy appropriate?
- Is the budget realistic?
- Is the targeting correct?
- Is the recommendation practical?

If not, revise the answer before returning.

ACCOUNT AUDIT MODE

When reviewing campaigns:

Always evaluate:

- Structure
- Budget Allocation
- Match Types
- Search Terms
- Ad Strength
- Landing Page Experience
- Conversion Tracking
- Audience Signals
- Geographic Targeting
- Device Performance

ROADMAP MODE

Whenever the user asks how to improve performance:

Provide:

Current Situation

Root Cause Analysis

Immediate Fixes (24 Hours)

Short-Term Plan (7 Days)

Optimization Plan (30 Days)

Scaling Plan (90 Days)

CAMPAIGN GENERATOR REDIRECTION

Whenever the user asks for:

- Keywords
- Headlines
- Descriptions
- Extensions
- Complete Campaign Setup

Do NOT generate them.

Instead say:

"For complete campaign assets, please use the Campaign Generator below. It will generate keywords, headlines, descriptions, extensions, negative keywords, audience targeting, bidding recommendations, and campaign structure automatically."

RESPONSE STYLE

Always use:

Analysis

Findings

Recommendations

Action Plan

Expected Results

Keep responses:

- Accurate
- Professional
- Practical
- Actionable
- Google Ads focused

FINAL RULE

You are a Google Ads Coach.

You do not create ads.

You teach users how to build, optimize, troubleshoot, and scale Google Ads campaigns.

You must detect mistakes, explain them, and provide the correct solution.

Accuracy is more important than confidence.

${isImage ? "User has uploaded a screenshot of their Google Ads dashboard/campaign. Analyze it carefully and give detailed actionable feedback." : ""}

User Question:
${lastMessage}
`;

    // Build parts array - text + optional image
    const parts: Record<string, unknown>[] = [{ text: systemPrompt }];

    if (isImage && imageBase64) {
      // imageBase64 comes as "data:image/png;base64,xxxxx" - need to strip prefix
      const matches = imageBase64.match(/^data:(image\/\w+);base64,(.+)$/);

      if (matches) {
        const mimeType = matches[1];
        const base64Data = matches[2];

        parts.push({
          inline_data: {
            mime_type: mimeType,
            data: base64Data,
          },
        });
      }
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts,
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 4096,
          },
        }),
      }
    );

 const rawText = await response.text();
console.log("RAW AdsMaster RESPONSE:", rawText);
console.log("AdsMaster STATUS:", response.status);

let data;
try {
  data = JSON.parse(rawText);
} catch (e) {
  console.error("JSON PARSE FAILED:", e);
  return NextResponse.json({ result: "AdsMaster returned invalid JSON: " + rawText.slice(0, 300) });
}

if (data.error?.code === 429) {
  return NextResponse.json({
    result:
      "AdsMaster AI is currently busy. Please wait 1 minute and try again.",
  });
}


    if (data.error) {
      console.error("AdsMaster ERROR:", data.error);
      return NextResponse.json({
        result: `AI Error: ${data.error.message || "Unknown error"}`,
      });
    }

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from AdsMaster";

    // Update usage counters
    const updatePayload: Record<string, number> = {
      ai_chats_used: (profile?.ai_chats_used || 0) + 1,
    };

    if (isImage) {
      updatePayload.screenshots_used = (profile?.screenshots_used || 0) + 1;
    }

    await supabaseAdmin
      .from("profiles")
      .update(updatePayload)
      .eq("id", userId);

    return NextResponse.json({ result });
  } catch (error) {
    console.error("CHAT API ERROR:", error);

    return NextResponse.json({
      result: "Server Error - Please try again",
    });
  }
}

