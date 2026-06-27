"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Digital Marketing Freelancer",
      image: "/users/user1.jpg",
      review:
        "AdsMaster AI helped me generate Google Ads campaigns in minutes. The keyword and headline suggestions saved hours of manual work.",
    },
    {
      name: "Priya Verma",
      role: "Small Business Owner",
      image: "/users/user2.jpg",
      review:
        "The screenshot analysis feature instantly found issues in my campaigns. CTR improved and wasted spend reduced significantly.",
    },
    {
      name: "Rahul Mehta",
      role: "Performance Marketer",
      image: "/users/user3.jpg",
      review:
        "I tested multiple AI tools but AdsMaster AI gives the most practical Google Ads recommendations. Worth every rupee.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 20px",
        background:
          "linear-gradient(180deg,#ffffff 0%,#f8fafc 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
              <h2
            style={{
              marginTop: "20px",
              fontSize: "clamp(36px,5vw,60px)",
              fontWeight: 900,
              color: "#111827",
              lineHeight: 1.1,
            }}
          >
            What Clients Say
            <br />
            About AdsMaster AI
          </h2>

          <div
            style={{
              marginTop: "20px",
              fontSize: "24px",
            }}
          >
            ⭐⭐⭐⭐⭐
            <span
              style={{
                marginLeft: "10px",
                color: "#6b7280",
                fontSize: "18px",
              }}
            >
              Rated 5.0 by Early Users
            </span>
          </div>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#ffffff",
                borderRadius: "28px",
                padding: "32px",
                border: "1px solid #e5e7eb",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.08)",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: "60px",
                  color: "#dbeafe",
                  position: "absolute",
                  top: "15px",
                  right: "20px",
                  fontWeight: 900,
                }}
              >
                ”
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />

                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "20px",
                      color: "#111827",
                    }}
                  >
                    {item.name}
                  </div>

                  <div
                    style={{
                      color: "#6b7280",
                      marginTop: "4px",
                    }}
                  >
                    {item.role}
                  </div>
                </div>
              </div>

              <div
                style={{
                  color: "#4b5563",
                  lineHeight: 1.9,
                  fontSize: "17px",
                }}
              >
                {item.review}
              </div>

              <div
                style={{
                  marginTop: "20px",
                  fontSize: "18px",
                }}
              >
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}