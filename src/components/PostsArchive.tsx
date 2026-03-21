import { startTransition, useDeferredValue, useState } from "react";

type ArchivePost = {
  title: string;
  permalink: string;
  publishedAt: string;
  year: string;
  timestamp: number;
  categories: string[];
};

type PostsArchiveProps = {
  posts: ArchivePost[];
};

export function PostsArchive({ posts }: PostsArchiveProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const deferredQuery = useDeferredValue(query);

  const categories = ["All", ...Array.from(
    new Set(posts.flatMap((post) => post.categories))
  ).sort((a, b) => a.localeCompare(b))];

  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.categories.includes(selectedCategory);
    const matchesQuery =
      normalizedQuery.length === 0 ||
      post.title.toLowerCase().includes(normalizedQuery) ||
      post.categories.some((category) =>
        category.toLowerCase().includes(normalizedQuery)
      ) ||
      post.year.includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });

  const postsByYear = filteredPosts.reduce<Record<string, ArchivePost[]>>(
    (groups, post) => {
      const bucket = groups[post.year] ?? [];
      bucket.push(post);
      groups[post.year] = bucket;
      return groups;
    },
    {}
  );

  const yearKeys = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="archive-shell">
      <section className="archive-hero">
        <p className="eyebrow">Archive</p>
        <h1>All writing in one place.</h1>
        <p className="archive-copy">
          Filter the archive by year, topic, or a free-text search across titles
          and tags.
        </p>
      </section>

      <section className="archive-toolbar" aria-label="Archive filters">
        <label className="search-field">
          <span>Search posts</span>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              const nextValue = event.target.value;
              startTransition(() => {
                setQuery(nextValue);
              });
            }}
            placeholder="React, testing, webpack..."
          />
        </label>

        <div className="filter-group">
          <span>Topics</span>
          <div className="pill-row">
            {categories.map((category) => (
              <button
                className={category === selectedCategory ? "pill is-active" : "pill"}
                key={category}
                onClick={() => {
                  startTransition(() => {
                    setSelectedCategory(category);
                  });
                }}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="archive-results" aria-live="polite">
        <div className="archive-summary">
          <p>{filteredPosts.length} posts visible</p>
        </div>

        {yearKeys.length > 0 ? (
          yearKeys.map((year) => (
            <section className="year-group" aria-labelledby={`year-${year}`} key={year}>
              <div className="year-heading">
                <h2 id={`year-${year}`}>{year}</h2>
                <span>{postsByYear[year].length} entries</span>
              </div>

              <div className="archive-card-list">
                {postsByYear[year]
                  .sort((a, b) => b.timestamp - a.timestamp)
                  .map((post) => (
                    <article className="archive-card" key={post.permalink}>
                      <div>
                        <p className="editorial-meta">
                          <span>{post.publishedAt}</span>
                        </p>
                        <h3>
                          <a href={post.permalink}>{post.title}</a>
                        </h3>
                      </div>
                      <div className="pill-row">
                        {post.categories.map((category) => (
                          <span className="pill static" key={`${post.permalink}-${category}`}>
                            {category}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
              </div>
            </section>
          ))
        ) : (
          <div className="empty-state">
            <h2>No posts match this filter</h2>
            <p>Try a different keyword or switch back to all topics.</p>
          </div>
        )}
      </section>
    </div>
  );
}
