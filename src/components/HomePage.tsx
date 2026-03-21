type PostSummary = {
  title: string;
  permalink: string;
  publishedAt: string;
  year: string;
  categoryLabel: string;
};

type HomePageProps = {
  postCount: number;
  yearsActive: number;
  latestPosts: PostSummary[];
  archivePosts: PostSummary[];
};

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="hero-stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function PostLinkCard({ post }: { post: PostSummary }) {
  return (
    <article className="editorial-card">
      <p className="editorial-meta">
        <span>{post.publishedAt}</span>
        <span>{post.categoryLabel}</span>
      </p>
      <h3>
        <a href={post.permalink}>{post.title}</a>
      </h3>
    </article>
  );
}

export function HomePage({
  postCount,
  yearsActive,
  latestPosts,
  archivePosts,
}: HomePageProps) {
  const featuredArchive = archivePosts.slice(0, 4);

  return (
    <div className="home-grid">
      <section className="hero-panel">
        <h1>
          Senior fullstack engineer focused on building scalable systems, clean
          architecture, and better developer experience.
        </h1>
        <p className="hero-lead">
          I write about frontend, architecture, and real-world product work.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="/posts/">
            Browse archive
          </a>
          <a className="button-secondary" href="/about/">
            About me
          </a>
        </div>
        <div className="hero-stats" aria-label="Site stats">
          <HeroStat label="Published posts" value={String(postCount)} />
          <HeroStat label="Years covered" value={String(yearsActive)} />
          <HeroStat label="Primary stack" value="React, TypeScript, Node.js" />
        </div>
      </section>

      <aside className="spotlight-panel">
        <p className="eyebrow">Current focus</p>
        <ul className="spotlight-list">
          <li>Building modern React and TypeScript applications end to end.</li>
          <li>
            Improving developer experience, architecture, and delivery flow.
          </li>
          <li>Keeping a lightweight personal archive of engineering notes.</li>
        </ul>
      </aside>

      <section className="content-panel" aria-labelledby="latest-posts-heading">
        <div className="section-headline">
          <div>
            <p className="eyebrow">Latest writing</p>
            <h2 id="latest-posts-heading">Recent posts</h2>
          </div>
          <a className="text-link" href="/posts/">
            See all posts
          </a>
        </div>
        <div className="editorial-grid">
          {latestPosts.map((post) => (
            <PostLinkCard key={post.permalink} post={post} />
          ))}
        </div>
      </section>

      <section
        className="content-panel archive-teaser"
        aria-labelledby="archive-teaser-heading"
      >
        <div className="section-headline">
          <div>
            <p className="eyebrow">Archive view</p>
            <h2 id="archive-teaser-heading">Browse by year and topic</h2>
          </div>
        </div>
        <div className="archive-columns">
          <div>
            <p className="archive-kicker">Years</p>
            <div className="pill-row">
              {Array.from(new Set(archivePosts.map((post) => post.year))).map(
                (year) => (
                  <span className="pill" key={year}>
                    {year}
                  </span>
                ),
              )}
            </div>
          </div>
          <div>
            <p className="archive-kicker">Featured archive picks</p>
            <div className="mini-list">
              {featuredArchive.map((post) => (
                <a
                  className="mini-list-item"
                  href={post.permalink}
                  key={post.permalink}
                >
                  <span>{post.title}</span>
                  <small>{post.year}</small>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
