"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import UpgradeModal from "../../components/dashboard/UpgradeModal";
import ReactMarkdown from "react-markdown";


export default function AdGeneratorPanel() {
  const [product, setProduct] = useState("");
  const [budget, setBudget] = useState("");
  const [website, setWebsite] = useState("");
  const [customBudget, setCustomBudget] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [showUpgrade, setShowUpgrade] =
  useState(false);
  const [plan, setPlan] = useState("free");
  const [upgradeMessage, setUpgradeMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [goal, setGoal] = useState("");
const [isFullscreen, setIsFullscreen] = useState(false);
  const [businessType, setBusinessType] = useState("");
const [customBusinessType, setCustomBusinessType] =
  useState("");

const businessTypes = [
  "Dental Clinic",
  "Real Estate",
  "Ecommerce",
  "Travel Agency",
  "Gym & Fitness",
  "Restaurant",
  "Salon & Spa",
  "Education",
  "Hospital",
  "Insurance",
  "Finance",
  "Automobile",
  "Home Services",
  "Software / SaaS",
  "Marketing Agency",
  "Law Firm",
  "Accounting Services",
  "Construction",
  "Interior Design",
  "Event Management",
  "Photography",
  "Consulting",
  "Local Service Business",
  "Other / Custom"
];

  const [location, setLocation] = useState("");
   const [customLocation, setCustomLocation] = useState("");
  const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi NCR",
  "Pan India",
  "Other / Custom"
];
  
const [customProduct, setCustomProduct] = useState("");

const productOptions = [
  "Teeth Whitening",
  "Dental Implants",
  "Braces",
  "Flats & Apartments",
  "Plots",
  "Villas",
  "Gym Membership",
  "Personal Training",
  "Weight Loss Program",
  "Hair Transplant",
  "Skin Treatment",
  "Salon Services",
  "Online Courses",
  "Coaching Classes",
  "Study Abroad",
  "Hotel Booking",
  "Tour Packages",
  "Car Rental",
  "Car Insurance",
  "Health Insurance",
  "Home Loans",
  "Personal Loans",
  "Accounting Services",
  "Digital Marketing",
  "SEO Services",
  "Website Development",
  "Software Development",
  "SaaS Product",
  "Ecommerce Products",
  "Fashion Store",
  "Electronics Store",
  "Furniture Store",
  "Restaurant",
  "Cloud Kitchen",
  "Catering Services",
  "Hospital Services",
  "Diagnostic Center",
  "Physiotherapy",
  "Other / Custom"
];


  useEffect(() => {
  loadPlan();
}, []);

const loadPlan = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("AUTH USER:", user);

  if (!user) {
    console.log("USER NOT FOUND");
    return;
  }

  setUserId(user.id);

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  console.log("PROFILE DATA:", data);
  console.log("PROFILE ERROR:", error);

  setPlan(data?.plan || "free");
};


  const generateCampaign = async () => {
  if (!businessType) {
  alert(
    "Please select Business Type"
  );
  return;
}

if (!product) {
  alert(
    "Please enter Product / Service"
  );
  return;
}

if (!location) {
  alert(
    "Please enter Target Location"
  );
  return;
}

if (!goal) {
  alert(
    "Please select Campaign Goal"
  );
  return;
}

if (!budget) {
  alert(
    "Please select Budget"
  );
  return;
}
console.log("USER ID FRONTEND:", userId);
console.log("PLAN FRONTEND:", plan);

    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
body: JSON.stringify({
  userId,
  plan,
  businessType:
    businessType === "Other / Custom"
      ? customBusinessType
      : businessType,

  product:
    product === "Other / Custom"
      ? customProduct
      : product,

  location:
    location === "Other / Custom"
      ? customLocation
      : location,

  goal,
  budget:
  budget === "custom"
    ? customBudget
    : budget,
  website,
}),
      });

      const data = await res.json();
    if (data.upgrade) {
  setUpgradeMessage(
    data.result || "Upgrade required."
  );
  setShowUpgrade(true);
  setLoading(false);
  return;
}

      setResult(data.result);
    } catch {
      setResult("Something went wrong");
    }

    setLoading(false);
  };

  const copyResult = async () => {
    await navigator.clipboard.writeText(result);
    alert("Campaign copied");
  };

  const downloadResult = () => {
    const blob = new Blob([result], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "AdsMasterAI-Campaign.txt";
    a.click();
  };

  const clearAll = () => {
    setBusinessType("");
    setCustomBusinessType("");

    setLocation("");
    setCustomLocation("");
    
    setProduct("");
    setCustomProduct("");

    setGoal("");
    setBudget("");
    setWebsite("");
    setResult("");

    setBudget("");
    setCustomBudget("");
  };



return (
  <div
    style={{
      width: isFullscreen ? "100vw" : "100%",
      height: isFullscreen ? "100vh" : "auto",

      position: isFullscreen
        ? "fixed"
        : "relative",

      top: isFullscreen ? 0 : "auto",
      left: isFullscreen ? 0 : "auto",

      zIndex: isFullscreen ? 9999 : 1,

      overflowY: isFullscreen
        ? "auto"
        : "visible",

      background: "#fff",
      borderRadius: isFullscreen
        ? "0px"
        : "24px",

      padding: "20px",

      border: "1px solid #e5e7eb",

      boxShadow:
        "0 20px 60px rgba(0,0,0,0.06)",
    }}
  >
   <div
  style={{
   
    position: "relative",
    marginBottom: "15px",
  }}
>
  <h2
    style={{
      fontSize: "32px",
      fontWeight: "800",
      marginBottom: "10px",
      textAlign: "center",
    }}
  >
    🚀 AI Google Ads Campaign Builder
  </h2>

 <button
 className="fullscreen-btn"
  onClick={() =>
    setIsFullscreen(!isFullscreen)
  }
  style={{
    position: "absolute",
    right: "20px",
    top: "1px",

    zIndex: 100,

    padding: "10px 14px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    background: "#fff",
    cursor: "pointer",
    fontWeight: "700",
  }}
>
  {isFullscreen ? "✖️" : "⛶ Full Screen"}
</button>
</div>

        <p
        style={{
          color: "#1c2530",
          marginBottom: "25px",
          textAlign: "center",
          fontSize: "18px",
          fontStyle: "inherit"
        }}
      >
        📈 Review performance after 48–72 hours and regenerate optimized keywords, headlines and ad copy.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "16px",
        }}
      >



<div>
  <label
    style={{
      display: "block",
      marginBottom: "8px",
      fontWeight: 600,
      color: "#111827",
    }}
  >
    Business Type *
  </label>

  <select
    value={businessType}
    onChange={(e) =>
      setBusinessType(e.target.value)
    }
    style={{
      width: "100%",
      padding: "14px",
      borderRadius: "14px",
      border: "1px solid #d1d5db",
      outline: "none",
      fontSize: "15px",
      background: "#fff",
    }}
  >
    <option value="">
      Select Business Type
    </option>

    {businessTypes.map((item) => (
      <option
        key={item}
        value={item}
      >
        {item}
      </option>
    ))}
  </select>

  {businessType === "Other / Custom" && (
    <input
      value={customBusinessType}
      onChange={(e) =>
        setCustomBusinessType(
          e.target.value
        )
      }
      placeholder="Enter Business Type"
      style={{
        width: "100%",
        padding: "14px",
        marginTop: "10px",
        borderRadius: "14px",
        border: "1px solid #d1d5db",
        outline: "none",
        fontSize: "15px",
      }}
    />
  )}
</div>



    <div>
  <label
    style={{
      display: "block",
      marginBottom: "8px",
      fontWeight: 600,
      color: "#111827",
    }}
  >
    Product / Service *
  </label>

  <select
    value={product}
    onChange={(e) => setProduct(e.target.value)}
    style={{
      width: "100%",
      padding: "14px",
      borderRadius: "14px",
      border: "1px solid #d1d5db",
      outline: "none",
      fontSize: "15px",
      background: "#fff",
    }}
  >
    <option value="">
      Select Product / Service
    </option>

    {productOptions.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>

  {product === "Other / Custom" && (
    <input
      value={customProduct}
      onChange={(e) =>
        setCustomProduct(e.target.value)
      }
      placeholder="Enter Product / Service"
      style={{
        width: "100%",
        padding: "14px",
        marginTop: "10px",
        borderRadius: "14px",
        border: "1px solid #d1d5db",
        outline: "none",
        fontSize: "15px",
      }}
    />
  )}
</div>

<div>
  <label
    style={{
      display: "block",
      marginBottom: "8px",
      fontWeight: 600,
    }}
  >
    Target Location *
  </label>

  <select
    value={location}
    onChange={(e) =>
      setLocation(e.target.value)
    }
    style={inputStyle}
  >
    <option value="">
      Select State
    </option>

    {states.map((state) => (
      <option
        key={state}
        value={state}
      >
        {state}
      </option>
    ))}
  </select>

  {location === "Other / Custom" && (
    <input
      value={customLocation}
      onChange={(e) =>
        setCustomLocation(
          e.target.value
        )
      }
      placeholder="Enter Target Location"
      style={{
        ...inputStyle,
        marginTop: "10px",
      }}
    />
  )}
</div>


<div>
  <label
    style={{
      display: "block",
      marginBottom: "8px",
      fontWeight: 600,
    }}
  >
    Campaign Goal *
  </label>

  <select
    value={goal}
    onChange={(e) =>
      setGoal(e.target.value)
    }
    style={inputStyle}
  >
    <option value="">
      Select Goal
    </option>

    <option>Leads</option>
    <option>Sales</option>
    <option>Phone Calls</option>
    <option>Website Traffic</option>
    <option>ROAS</option>
  </select>
</div>



<div>
  <label
    style={{
      display: "block",
      marginBottom: "8px",
      fontWeight: 600,
    }}
  >
    Campaign Budget *
  </label>

  <select
    value={budget}
    onChange={(e) =>
      setBudget(e.target.value)
    }
    style={inputStyle}
  >
    <option value="">
      Select Budget
    </option>

    <optgroup label="Daily Budget">
      <option>₹200 - ₹500 / Day</option>
      <option>₹500 - ₹1,000 / Day</option>
      <option>₹1,000 - ₹2,500 / Day</option>
      <option>₹2,500 - ₹5,000 / Day</option>
      <option>₹5,000+ / Day</option>
    </optgroup>

    <optgroup label="Monthly Budget">
      <option>₹5,000 - ₹10,000 / Month</option>
      <option>₹10,000 - ₹25,000 / Month</option>
      <option>₹25,000 - ₹50,000 / Month</option>
      <option>₹50,000 - ₹1,00,000 / Month</option>
      <option>₹1,00,000+ / Month</option>
    </optgroup>

    <option value="custom">
      Other / Custom
    </option>
  </select>

  {budget === "custom" && (
    <input
      placeholder="Enter Budget (e.g. ₹15,000/month or ₹800/day)"
      value={customBudget}
      onChange={(e) =>
        setCustomBudget(e.target.value)
      }
      style={{
        ...inputStyle,
        marginTop: "10px",
      }}
    />
  )}
</div>

        <div
          style={{
            gridColumn: "1/-1",
          }}
        >
          <InputField
            value={website}
            setValue={setWebsite}
            placeholder="Website URL (Optional) e.g. https://yourwebsite.com"
          />
        </div>
      </div>

  <button
  onClick={generateCampaign}
  disabled={loading}
  style={{
    marginTop: "20px",
    width: "100%",
    padding: "16px",
    border: "none",
    borderRadius: "16px",
    cursor: loading ? "not-allowed" : "pointer",
    background:
      "linear-gradient(135deg,#2563eb,#4f46e5)",
    color: "#fff",
    fontWeight: "800",
    fontSize: "16px",
    position: "relative",
    overflow: "hidden",
  }}
>
  {loading ? (
    <>
      Generating Campaign...
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "4px",
          width: "100%",
          background:
            "linear-gradient(90deg,#00e5ff,#ffffff,#00e5ff)",
          animation:
            "loadingBar 1.2s linear infinite",
        }}
      />
    </>
  ) : (
    "🚀 Generate Campaign"
  )}
</button>

      <button
        onClick={clearAll}
        style={{
          marginTop: "12px",
          width: "100%",
          padding: "14px",
          borderRadius: "16px",
          background:"linear-gradient(135deg,#eff6ff,#eef2ff)",
          border: "1px solid #c7d2fe",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        🗑️ Clear All
      </button>

      {result && (
        <div
          style={{
            marginTop: "30px",
            background: "linear-gradient(180deg,#ffffff,#f8fafc)",
            boxShadow: "0 20px 60px rgba(37,99,235,.12)",
            borderRadius: "20px",
            padding: "25px",
            border: "1px solid #e5e7eb",
          }}
        >

   
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "15px",
            }}
          >
            <button
              onClick={copyResult}
              style={actionButton}
            >
              📋 Copy
            </button>

            <button
              onClick={downloadResult}
              style={actionButton}
            >
              📄 Download
            </button>

            <button
              onClick={() => setResult("")}
              style={actionButton}
            >
              🗑️ Clear Result
            </button>
          </div>

<ReactMarkdown
  components={{
    h1: ({ children }) => (
      <h1
        style={{
          fontSize: "34px",
          fontWeight: 800,
          marginTop: "30px",
          color: "#111827",
        }}
      >
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <div
        style={{
          marginTop: "30px",
          marginBottom: "20px",
          padding: "16px",
          borderRadius: "16px",
          background:
            "linear-gradient(135deg,#2563eb,#4f46e5)",
          color: "#fff",
          fontWeight: 800,
          fontSize: "20px",
        }}
      >
        {children}
      </div>
    ),

    li: ({ children }) => (
      <li
        style={{
          marginBottom: "10px",
          lineHeight: "1.8",
        }}
      >
        {children}
      </li>
    ),
  }}
>
  {result}
</ReactMarkdown>


        </div>
      )}
  <UpgradeModal
  open={showUpgrade}
  message={upgradeMessage}
/>

<style>{`
${loadingAnimation}

@media (max-width:768px){

  .fullscreen-btn{
    display:block !important;
    position:static !important;
    margin:0 auto 15px auto !important;
    width:fit-content !important;
  }

}
`}</style>
    </div>

    
  );
}

function InputField({
  value,
  setValue,
  placeholder,
}: any) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) =>
          setValue(e.target.value)
        }
        style={inputStyle}
      />

      {value && (
        <button
          onClick={() => setValue("")}
          style={{
            position: "absolute",
            right: "14px",
            top: "50%",
            transform:
              "translateY(-50%)",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "18px",
            color: "#6b7280",
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  borderRadius: "14px",
  border: "1px solid #d1d5db",
  outline: "none",
  fontSize: "14px",
  background: "#fff"
};

const actionButton = {
  padding: "10px 16px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  background: "#fff",
  cursor: "pointer",
  fontWeight: "600",
};

const loadingAnimation = `
@keyframes loadingBar {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
`;
