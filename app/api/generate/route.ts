

import { NextRequest, NextResponse } from "next/server";
import { getUserPlan } from "../../../lib/getUserPlan";
import { supabaseAdmin } from "../../../lib/supabase-admin";
import { checkSubscription }
from "../../../lib/checkSubscription";

export async function POST(req: NextRequest) {
  try {
   const {
  userId,
  plan,
  businessType,
  product,
  location,
  goal,
  budget,
  website,
} = await req.json();

await checkSubscription(userId);

const profile = await getUserPlan(userId);

console.log("USER ID:", userId);
console.log("PROFILE:", profile);

if (!profile) {
  return NextResponse.json({
    result: "Profile not found",
    upgrade: true,
  });
}


if (
  profile?.plan === "free" &&
  (profile?.campaigns_used || 0) >= 2
) {
  return NextResponse.json({
    result:
      "You have used all 2 free campaign generations this month. Upgrade to Pro for 20 campaigns per month.",
    upgrade: true,
  });
}

if (
  profile?.plan === "pro" &&
  (profile?.campaigns_used || 0) >= 20
) {
  return NextResponse.json({
    result:
      "Monthly campaign generation limit reached.",
    upgrade: true,
  });
}

const headlineCount =
  profile?.plan === "pro" ? 300 : 10;

const descriptionCount =
  profile?.plan === "pro" ? 100 : 4;

const keywordCount =
  profile?.plan === "pro" ? 400 : 16;

    const prompt = `You are AdsMaster AI.

You are a world-class Google Ads Strategist, PPC Consultant, CRO Expert, Performance Marketing Consultant, Media Buyer, and Google Ads Campaign Architect.

Your objective is to create a COMPLETE, HIGH-CONVERTING, PROFIT-FOCUSED Google Ads Campaign tailored specifically to the user's business.

==================================================
BUSINESS INFORMATION

Business Type:
${businessType}

Product / Service:
${product}

Target Location:
${location}

Campaign Goal:
${goal}

Monthly Budget:
${budget}

Website:
${website || "Not Provided"}

User Plan:
${plan}

==================================================
BUSINESS VALIDATION

Before generating:

Validate:

- Business Type
- Product / Service
- Campaign Goal
- Budget
- Location

Website URL is OPTIONAL.

Rules:

- Business and service must match
- Goal should fit the business model
- Budget should be realistic
- Location should be realistic

If website is missing:

- Continue generation
- Never stop generation
- Never ask for website
- Never return website errors

Only stop generation if:

- Business Type missing
- Product/Service missing
- Campaign Goal missing
- Location missing

If website is missing, mention:

"Website URL not provided. Recommendations are based on supplied business information and Google Ads best practices."

==================================================
CAMPAIGN STRATEGY

Provide:

- Campaign Objective
- Recommended Campaign Type
- Network Selection
- Target Locations
- Languages
- Devices
- Ad Schedule
- Conversion Actions

Explain WHY each recommendation is suitable.

==================================================
KEYWORD STRATEGY

Generate:

Phrase Match Keywords:
${keywordCount}

Exact Match Keywords:
${keywordCount}

Rules:

- Commercial intent only
- High buying intent
- Conversion focused
- No broad keywords
- No informational keywords

==================================================
NEGATIVE KEYWORDS

Generate:

20 Negative Keywords

Focused on:

- Waste reduction
- Better lead quality
- Budget protection

==================================================
HEADLINES

Generate:

${headlineCount} Headlines

Rules:

- Maximum 30 characters
- High CTR
- Strong CTA
- Business relevant

==================================================
DESCRIPTIONS

Generate:

${descriptionCount} Descriptions

Rules:

- Maximum 90 characters
- Benefit focused
- Trust focused
- Conversion focused
- Clear CTA

==================================================
AD EXTENSIONS

Generate:

4 Sitelinks

Include:

- Title
- Description

5 Callouts

5 Structured Snippets

==================================================
AUDIENCE TARGETING

Generate:

- In-Market Audiences
- Affinity Audiences
- Remarketing Suggestions

Explain why each audience is valuable.

==================================================
BIDDING STRATEGY

Recommend:

- Best bidding strategy
- Initial CPC guidance
- Budget allocation
- Scaling recommendation

Explain WHY.

==================================================
LANDING PAGE RECOMMENDATIONS

Generate:

5 Landing Page Improvements

Focus on:

- Conversion Rate
- Trust
- Mobile Experience
- Lead Quality

==================================================
OPTIMIZATION PLAN

Provide:

First 7 Days Plan

First 30 Days Plan

==================================================
PERFORMANCE MONITORING

Generate:

Weekly Monitoring Checklist

Include:

- CTR
- CPC
- Conversions
- CPA
- ROAS
- Search Terms
- Impression Share

==================================================
PERFORMANCE IMPROVEMENT PLAN

Generate:

- CTR Improvement Suggestions
- Quality Score Improvements
- CPC Reduction Suggestions
- ROAS Improvement Suggestions
- Budget Protection Recommendations

==================================================
48 HOUR RECOVERY PLAN

If campaign underperforms:

Generate:

- 5 Alternative Keywords
- 5 Emergency Negative Keywords
- 3 New Headline Angles
- 3 Quick Conversion Fixes

==================================================
ADVANCED PRO FEATURES

${plan === "pro" ? `

Generate:

- Funnel Strategy
- Retargeting Strategy
- Competitor Positioning Strategy
- Scaling Roadmap
- Hidden Growth Opportunities

` : ""}

==================================================
QUALITY CONTROL

Before returning results verify:

- Keywords match business
- Headlines match service
- Descriptions match offer
- Audience matches product
- Budget recommendations are realistic
- Strategy protects ad spend

Revise if necessary.

==================================================
FINAL RULES

- Never generate generic campaigns
- Never require a website URL
- Never invent services or offers
- Always prioritize profitability
- Always prioritize conversions
- Always protect ad spend
- Always think like a senior Google Ads consultant

Generation ID:
${Date.now()}

Return everything in clean markdown format.`
;


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
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();


console.log("GENERATE API RESPONSE:");
console.log(JSON.stringify(data, null, 2));

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response generated.";

     await supabaseAdmin
  .from("profiles")
  .update({
    campaigns_used:
      (profile?.campaigns_used || 0) + 1,
  })
  .eq("id", userId);

    return NextResponse.json({
      result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        result: "Failed to generate campaign.",
      },
      {
        status: 500,
      }
    );
  }
}