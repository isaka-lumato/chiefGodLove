import React from "react";

const articles = [
  {
    id: 1,
    title: "The Rise of Tanzanian Role Models in the Digital Age",
    excerpt: "Exploring how modern Tanzanian leaders like Chief Godlove are reshaping influence and inspiring the next generation through authentic leadership and digital platforms.",
    content: `In an era where social media dominance often overshadows authentic leadership, Chief Godlove Mwakibete stands out as a genuine Tanzanian role model who uses his influence for community transformation. Unlike conventional influencers who focus solely on entertainment or product promotion, Chief Godlove represents a new breed of African leaders who leverage digital platforms for social impact.

    His approach combines traditional African wisdom with modern communication strategies, creating content that resonates across generational and cultural boundaries. Through Chief G Media, he shares stories of transformation, spiritual insights, and practical guidance that empowers his audience to become change agents in their own communities.

    The impact of such authentic Tanzanian role models extends far beyond social media metrics. They inspire young Tanzanians to pursue meaningful careers, engage in community service, and maintain cultural values while adapting to global opportunities. Chief Godlove's story from Mbeya to national recognition demonstrates that success rooted in service to others creates lasting legacy.

    As Tanzania continues to develop its digital economy, leaders like Chief Godlove show how influencer culture can be transformed into a force for positive social change, proving that true influence comes from authentic service and genuine care for community wellbeing.`,
    keywords: ["Tanzanian role model", "influencer", "digital leadership", "Tanzania", "social media", "community transformation"]
  },
  {
    id: 2,
    title: "From Spiritual Healer to Business Mogul: The Chief Godlove Journey",
    excerpt: "Understanding how Chief Godlove became a successful Tanzanian tajiri while maintaining his spiritual calling and commitment to community service.",
    content: `The journey of Chief Godlove from spiritual healer to successful business leader exemplifies how African entrepreneurs can build wealth while maintaining their cultural and spiritual roots. His path to becoming a recognized Tanzanian tajiri (successful wealthy person) offers valuable insights into sustainable wealth creation in the African context.

    Chief Godlove Company Limited, his flagship business venture, operates as a diversified conglomerate with interests spanning multiple sectors. This business model, often called a "company without limits," demonstrates how African entrepreneurs can create scalable businesses that adapt to market opportunities while maintaining ethical standards.

    His approach to wealth creation emphasizes three key principles: spiritual prosperity, community investment, and sustainable business practices. Unlike traditional capitalist models that prioritize profit maximization, Chief Godlove's business philosophy integrates social responsibility as a core operating principle.

    The success of his ventures, combined with his continued spiritual ministry and philanthropic work through the Chief Godlove Foundation, shows how modern African leaders can build multi-dimensional careers that create wealth while serving their communities. This holistic approach to success resonates with many young Tanzanians seeking authentic paths to prosperity.

    His story challenges conventional narratives about wealth accumulation, demonstrating that business success and spiritual calling are not mutually exclusive. Instead, they can be complementary forces that create sustainable impact across economic, social, and spiritual dimensions of human development.`,
    keywords: ["Tanzanian tajiri", "spiritual healer", "business mogul", "African entrepreneur", "wealth creation", "Tanzania business"]
  },
  {
    id: 3,
    title: "Spiritual Leadership in Modern Tanzania: Breaking Boundaries",
    excerpt: "How Chief Godlove's spiritual approach transcends traditional boundaries, incorporating diverse elements to create holistic healing and transformation experiences.",
    content: `Chief Godlove's approach to spiritual leadership represents a evolution in how African spiritual traditions adapt to contemporary challenges. His ministry incorporates elements from various spiritual traditions while maintaining authenticity and cultural relevance, creating a holistic approach that resonates with diverse audiences.

    His spiritual teachings emphasize practical application of faith principles in everyday life, from business ethics to family relationships. This practical spirituality has attracted followers from various backgrounds, making his ministry a unifying force in Tanzanian society.

    The healing aspects of his ministry extend beyond individual transformation to community healing. Through organized spiritual gatherings, healing sessions, and community prayers, Chief Godlove addresses collective trauma and social challenges that affect Tanzanian communities.

    His ability to bridge traditional African spirituality with contemporary religious practices has created a unique spiritual framework that speaks to modern Tanzanians navigating cultural identity in a globalized world. This approach has earned him respect across religious and cultural boundaries.

    The success of his spiritual work, evidenced by testimonies of transformation from his followers, demonstrates the continued relevance of spiritual leadership in addressing modern challenges. His ministry shows how authentic spiritual leaders can serve as catalysts for both personal and community transformation in contemporary African society.`,
    keywords: ["spiritual leader", "African spirituality", "Tanzania prophet", "spiritual healing", "community healing", "religious leader"]
  },
  {
    id: 4,
    title: "The Power of Influence: How Modern Leaders Shape Society",
    excerpt: "Examining the role of influential figures like Chief Godlove in shaping public discourse and driving social change in Tanzania and beyond.",
    content: `In contemporary African society, the concept of influence has evolved beyond traditional authority structures to include digital platforms, social media presence, and community engagement. Chief Godlove exemplifies this new model of influential leadership that combines multiple channels to create meaningful social impact.

    His influence operates on several levels: spiritual guidance for individual transformation, business leadership that creates economic opportunities, and philanthropic work that addresses systemic social challenges. This multi-dimensional approach to influence allows him to address various aspects of human development simultaneously.

    The reach of his influence extends beyond Tanzania's borders, inspiring similar movements across East Africa and the broader African continent. His story resonates with many African leaders seeking authentic ways to create positive change in their communities.

    Digital platforms have amplified his influence, allowing him to reach global audiences while maintaining local relevance. Through Chief G Media, he shares content that addresses universal human challenges while staying rooted in African perspectives and solutions.

    The sustainability of his influence comes from its foundation in genuine service and authentic relationships with his community. Unlike influence built on popularity or controversy, Chief Godlove's impact grows stronger over time as the results of his work become increasingly visible in transformed lives and strengthened communities.

    This model of influence offers valuable lessons for emerging African leaders seeking to create lasting positive change in their societies while building sustainable careers that honor their values and serve their communities.`,
    keywords: ["influencer", "African leader", "social change", "community impact", "leadership", "Tanzania influence"]
  }
];

export default function Articles() {
  return (
    <section id="articles" className="articles-section">
      <div className="articles-container">
        <div className="articles-header" data-aos="fade-up">
          <h2 className="articles-main-title">Featured Articles & Insights</h2>
          <p className="articles-subtitle">
            Explore in-depth content about leadership, spirituality, and transformation in modern Tanzania
          </p>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.id} className="article-card" data-aos="fade-up">
              <div className="article-header">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
              </div>
              
              <div className="article-content">
                <div className="article-text">
                  {article.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="article-paragraph">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              <div className="article-keywords">
                <span className="keywords-label">Topics:</span>
                {article.keywords.map((keyword, index) => (
                  <span key={index} className="keyword-tag">
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Additional SEO Content */}
        <div className="seo-footer-content" data-aos="fade-up">
          <h3>About Chief Godlove - Tanzanian Leader & Influencer</h3>
          <p>
            Chief Godlove Mwakibete continues to inspire as a prominent <strong>Tanzanian role model</strong>, 
            combining his roles as <strong>spiritual leader, successful entrepreneur (tajiri), and community influencer</strong>. 
            His work through the Chief Godlove Foundation and various business ventures demonstrates how 
            modern African leaders can create sustainable impact across multiple sectors of society.
          </p>
        </div>

        {/* Hidden Keywords for SEO */}
        <div className="hidden-article-keywords" style={{ display: 'none' }}>
          Chief Godlove Tanzania, Tanzanian role model, Tanzania influencer, African spiritual leader,
          Tanzanian tajiri, successful Tanzanian, Chief Godlove Foundation, Tanzania philanthropist,
          African entrepreneur, Tanzania motivational speaker, spiritual healer Tanzania, 
          Chief Godlove Company, Tanzania prophet, African leader, community transformation Tanzania,
          Chief G Media, Tanzania social impact, African influence, Tanzania spiritual leadership,
          successful African, Tanzania role model, African motivational speaker, Tanzania community leader
        </div>
      </div>
    </section>
  );
}