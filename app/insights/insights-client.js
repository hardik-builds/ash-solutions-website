'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

function SkeletonCard() {
  return (
    <div
      className="glass-panel"
      style={{
        borderRadius: '24px',
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        boxShadow: 'var(--card-shadow), var(--card-sheen)',
        padding: 'var(--card-padding)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '180px'
      }}
    >
      <div className="shimmer-effect" />
      
      {/* Category/Author row */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '120px', height: '12px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px' }} />
        <div style={{ width: '80px', height: '12px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px' }} />
      </div>

      {/* Title */}
      <div style={{ width: '60%', height: '24px', background: 'rgba(255, 255, 255, 0.12)', borderRadius: '6px', margin: '4px 0' }} />

      {/* Description lines */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ width: '100%', height: '14px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }} />
        <div style={{ width: '95%', height: '14px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }} />
        <div style={{ width: '80%', height: '14px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }} />
      </div>

      {/* Tags/Bottom row */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
        <div style={{ width: '80px', height: '26px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px' }} />
        <div style={{ width: '65px', height: '26px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px' }} />
      </div>
    </div>
  );
}

export default function InsightsClient() {
  const [activeTab, setActiveTab] = useState('case-studies');
  const [user, setUser] = useState(null);
  const [caseStudies, setCaseStudies] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  // Case Study Form fields
  const [csTitle, setCsTitle] = useState('');
  const [csClient, setCsClient] = useState('');
  const [csDesc, setCsDesc] = useState('');
  const [csOutcome, setCsOutcome] = useState('');
  const [csTags, setCsTags] = useState('');

  // Blog Form fields
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogAuthor, setBlogAuthor] = useState('');
  const [blogTags, setBlogTags] = useState('');

  // Review Form fields
  const [reviewName, setReviewName] = useState('');
  const [reviewCompany, setReviewCompany] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');

  // Modals / forms visibility
  const [showAddForm, setShowAddForm] = useState(false);

  const router = useRouter();

  // Load auth state from /api/auth/me cookie endpoint
  const loadAuth = async () => {
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        setReviewName(data.user.name);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error('Failed to load authentication state:', err);
      setUser(null);
    } finally {
      setIsAuthLoading(false);
    }
  };

  useEffect(() => {
    loadAuth();
    
    // Listen for custom auth-change events
    window.addEventListener('auth-change', loadAuth);
    return () => window.removeEventListener('auth-change', loadAuth);
  }, []);

  // Fetch lists
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [csRes, blogRes, revRes] = await Promise.all([
          fetch('/api/case-studies'),
          fetch('/api/blogs'),
          fetch('/api/reviews'),
        ]);

        if (csRes.ok) {
          const csData = await csRes.json();
          setCaseStudies(csData.caseStudies);
        }
        if (blogRes.ok) {
          const blogData = await blogRes.json();
          setBlogs(blogData.blogs);
        }
        if (revRes.ok) {
          const revData = await revRes.json();
          setReviews(revData.reviews);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  const handleLogout = async () => {
    setFormError('');
    setFormSuccess('');
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      if (!res.ok) {
        throw new Error('Failed to log out');
      }
      setUser(null);
      setFormSuccess('Logged out successfully');
      setTimeout(() => setFormSuccess(''), 3000);
      window.dispatchEvent(new Event('auth-change'));
    } catch (err) {
      setFormError(err.message);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "WARNING: This will permanently delete your account, your client reviews, and all associated personal data in accordance with DPDP compliance. This action is irreversible. Do you want to proceed?"
    );
    if (!confirmDelete) return;

    setFormError('');
    setFormSuccess('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/auth/delete-account', {
        method: 'DELETE',
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to delete account');
      }

      setUser(null);
      setFormSuccess('Account and associated data deleted successfully.');
      setTimeout(() => setFormSuccess(''), 3000);
      window.dispatchEvent(new Event('auth-change'));
    } catch (err) {
      setFormError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteCaseStudy = async (studyId) => {
    const confirmDelete = window.confirm("Are you sure you want to permanently delete this Case Study?");
    if (!confirmDelete) return;

    setFormError('');
    setFormSuccess('');
    setIsSubmitting(true);

    try {
      const res = await fetch(`/api/case-studies/${studyId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to delete case study');
      }

      setCaseStudies(caseStudies.filter(cs => cs._id !== studyId));
      setFormSuccess('Case Study deleted successfully.');
      setTimeout(() => setFormSuccess(''), 3000);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteBlog = async (blogId) => {
    const confirmDelete = window.confirm("Are you sure you want to permanently delete this Blog Post?");
    if (!confirmDelete) return;

    setFormError('');
    setFormSuccess('');
    setIsSubmitting(true);

    try {
      const res = await fetch(`/api/blogs/${blogId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to delete blog post');
      }

      setBlogs(blogs.filter(b => b._id !== blogId));
      setFormSuccess('Blog post deleted successfully.');
      setTimeout(() => setFormSuccess(''), 3000);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Submissions
  const handleAddCaseStudy = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');
    setIsSubmitting(true);

    try {
      const tagsArray = csTags.split(',').map(t => t.trim()).filter(Boolean);
      const res = await fetch('/api/case-studies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: csTitle,
          client: csClient,
          description: csDesc,
          outcome: csOutcome,
          tags: tagsArray
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit case study');
      }

      setCaseStudies([data.caseStudy, ...caseStudies]);
      setFormSuccess('Case Study published successfully!');
      setCsTitle('');
      setCsClient('');
      setCsDesc('');
      setCsOutcome('');
      setCsTags('');
      setShowAddForm(false);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');
    setIsSubmitting(true);

    try {
      const tagsArray = blogTags.split(',').map(t => t.trim()).filter(Boolean);
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: blogTitle,
          content: blogContent,
          author: blogAuthor,
          tags: tagsArray
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to publish blog post');
      }

      setBlogs([data.blog, ...blogs]);
      setFormSuccess('Blog post published successfully!');
      setBlogTitle('');
      setBlogContent('');
      setBlogAuthor('');
      setBlogTags('');
      setShowAddForm(false);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddReview = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: reviewName,
          company: reviewCompany,
          rating: Number(reviewRating),
          comment: reviewComment
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit review');
      }

      setReviews([data.review, ...reviews]);
      setFormSuccess('Review submitted successfully! Thank you for your feedback.');
      setReviewCompany('');
      setReviewRating(5);
      setReviewComment('');
      setShowAddForm(false);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="services-page-wrapper"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'transparent',
        padding: '160px 24px 100px',
        color: 'var(--text-color)',
        overflow: 'hidden',
      }}
    >
      {/* Background Glows */}
      <div
        className="mesh-glow-indigo"
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '-150px',
          right: '-100px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        className="mesh-glow-cyan"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          bottom: '10%',
          left: '-150px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            style={{
              color: '#4f46e5',
              fontWeight: '700',
              letterSpacing: '2px',
              marginBottom: '15px',
              textTransform: 'uppercase',
              fontSize: '13px',
            }}
          >
            Insights & Testimonials
          </div>
          <h1
            style={{
              fontSize: 'clamp(38px, 6vw, 64px)',
              fontWeight: '950',
              lineHeight: '1.05',
              color: 'var(--title-color)',
              letterSpacing: '-2.5px',
              marginBottom: '20px',
            }}
          >
            Case Studies, Blogs & Reviews
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--body-text)', fontSize: '18px', lineHeight: '1.7' }}>
            Discover how we build high-performing digital platforms and what our clients think of our work.
          </p>
        </div>

        {/* Auth Status Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px',
            padding: '14px 20px',
            marginBottom: '40px',
            fontSize: '14px',
            flexWrap: 'wrap',
            gap: '12px',
            minHeight: '62px',
          }}
          className="glass-panel"
        >
          {isAuthLoading ? (
            <span style={{ color: 'var(--body-text)' }}>Verifying credentials...</span>
          ) : user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--title-color)', fontWeight: '700' }}>
                Logged in as: <span style={{ color: '#4f46e5' }}>{user.name}</span> ({user.role})
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={handleLogout}
                  style={{
                    background: 'rgba(99, 102, 241, 0.08)',
                    color: '#4f46e5',
                    border: '1px solid rgba(99, 102, 241, 0.15)',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    fontSize: '12px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  Logout
                </button>
                {user.role === 'user' && (
                  <button
                    onClick={handleDeleteAccount}
                    style={{
                      background: 'rgba(239, 68, 68, 0.08)',
                      color: '#ef4444',
                      border: '1px solid rgba(239, 68, 68, 0.15)',
                      borderRadius: '8px',
                      padding: '6px 12px',
                      fontSize: '12px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    Delete Account & Data
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--body-text)', fontWeight: '600' }}>
                Want to write a review? Sign in to your account.
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Link
                  href="/login"
                  style={{
                    background: 'rgba(99, 102, 241, 0.08)',
                    color: '#4f46e5',
                    border: '1px solid rgba(99, 102, 241, 0.15)',
                    borderRadius: '8px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: '700',
                  }}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  style={{
                    background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: '700',
                  }}
                  className="cta-primary-btn"
                >
                  Register
                </Link>
              </div>
            </div>
          )}

          {/* Action Button for Logged-In Users */}
          {!isAuthLoading && user && (
            <div>
              {user.role === 'admin' && (activeTab === 'case-studies' || activeTab === 'blogs') && (
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  style={{
                    background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '10px 18px',
                    fontSize: '13px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(79, 70, 229, 0.2)',
                  }}
                >
                  {showAddForm ? 'Cancel' : activeTab === 'case-studies' ? '+ Add Case Study' : '+ Add Blog'}
                </button>
              )}
              {user.role === 'user' && activeTab === 'reviews' && (
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  style={{
                    background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '10px 18px',
                    fontSize: '13px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(79, 70, 229, 0.2)',
                  }}
                >
                  {showAddForm ? 'Cancel' : '+ Leave a Review'}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Global Notifications */}
        {formSuccess && (
          <div
            style={{
              background: 'rgba(34, 197, 94, 0.08)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '12px',
              color: '#22c55e',
              padding: '12px 20px',
              fontSize: '13px',
              fontWeight: '600',
              marginBottom: '30px',
              textAlign: 'center',
            }}
          >
            {formSuccess}
          </div>
        )}

        {/* Tabs Control */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            borderBottom: '1px solid var(--card-border)',
            paddingBottom: '16px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          {['case-studies', 'blogs', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAddForm(false);
                setFormError('');
              }}
              style={{
                background: activeTab === tab ? 'rgba(99, 102, 241, 0.08)' : 'transparent',
                color: activeTab === tab ? '#4f46e5' : 'var(--text-color)',
                border: activeTab === tab ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid transparent',
                padding: '12px 24px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize',
              }}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Action Form (Accordion Style) */}
        {showAddForm && !isAuthLoading && user && (
          <div
            className="glass-panel"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '24px',
              padding: '30px',
              marginBottom: '40px',
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '20px', color: 'var(--title-color)' }}>
              {activeTab === 'case-studies' && 'Publish a new Case Study'}
              {activeTab === 'blogs' && 'Write a new Blog Post'}
              {activeTab === 'reviews' && 'Write your Client Review'}
            </h3>

            {formError && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '10px',
                  color: '#ef4444',
                  padding: '10px 16px',
                  fontSize: '13px',
                  marginBottom: '20px',
                }}
              >
                {formError}
              </div>
            )}

            {/* CASE STUDY FORM */}
            {activeTab === 'case-studies' && user.role === 'admin' && (
              <form onSubmit={handleAddCaseStudy} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '700' }}>Project Title</label>
                    <input
                      type="text"
                      required
                      value={csTitle}
                      onChange={(e) => setCsTitle(e.target.value)}
                      placeholder="e.g. AI-Driven Automation for Real Estate"
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '700' }}>Client Name</label>
                    <input
                      type="text"
                      required
                      value={csClient}
                      onChange={(e) => setCsClient(e.target.value)}
                      placeholder="e.g. PropTech International"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>Description (Challenges & Solution)</label>
                  <textarea
                    required
                    rows="4"
                    value={csDesc}
                    onChange={(e) => setCsDesc(e.target.value)}
                    placeholder="Describe what challenges the client faced and how you solved them..."
                    style={textareaStyle}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>Outcome Details</label>
                  <input
                    type="text"
                    required
                    value={csOutcome}
                    onChange={(e) => setCsOutcome(e.target.value)}
                    placeholder="e.g. 40% efficiency gain and 2.4x speed increase"
                    style={inputStyle}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>Tags (comma-separated)</label>
                  <input
                    type="text"
                    value={csTags}
                    onChange={(e) => setCsTags(e.target.value)}
                    placeholder="Next.js, AI, Automation, Database"
                    style={inputStyle}
                  />
                </div>
                <button type="submit" disabled={isSubmitting} style={submitButtonStyle}>
                  {isSubmitting ? 'Publishing...' : 'Publish Case Study'}
                </button>
              </form>
            )}

            {/* BLOG FORM */}
            {activeTab === 'blogs' && user.role === 'admin' && (
              <form onSubmit={handleAddBlog} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '700' }}>Article Title</label>
                    <input
                      type="text"
                      required
                      value={blogTitle}
                      onChange={(e) => setBlogTitle(e.target.value)}
                      placeholder="e.g. Future of Next.js and AI Platforms"
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '700' }}>Author Name</label>
                    <input
                      type="text"
                      value={blogAuthor}
                      onChange={(e) => setBlogAuthor(e.target.value)}
                      placeholder="ASH Solutions (Default)"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>Content</label>
                  <textarea
                    required
                    rows="6"
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                    placeholder="Write your blog article content here..."
                    style={textareaStyle}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>Tags (comma-separated)</label>
                  <input
                    type="text"
                    value={blogTags}
                    onChange={(e) => setBlogTags(e.target.value)}
                    placeholder="Trends, Technology, Nextjs, AI"
                    style={inputStyle}
                  />
                </div>
                <button type="submit" disabled={isSubmitting} style={submitButtonStyle}>
                  {isSubmitting ? 'Publishing...' : 'Publish Blog Post'}
                </button>
              </form>
            )}

            {/* REVIEW FORM */}
            {activeTab === 'reviews' && user.role === 'user' && (
              <form onSubmit={handleAddReview} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '700' }}>Your Name</label>
                    <input
                      type="text"
                      required
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '700' }}>Company Name (Optional)</label>
                    <input
                      type="text"
                      value={reviewCompany}
                      onChange={(e) => setReviewCompany(e.target.value)}
                      placeholder="e.g. Acme Corp"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>Rating</label>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {[1, 2, 3, 4, 5].map((stars) => (
                      <button
                        key={stars}
                        type="button"
                        onClick={() => setReviewRating(stars)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          fontSize: '24px',
                          cursor: 'pointer',
                          color: stars <= reviewRating ? '#fbbf24' : '#e4e4e7',
                          padding: 0,
                          outline: 'none',
                        }}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>Feedback Comment</label>
                  <textarea
                    required
                    rows="4"
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    placeholder="Share your experience working with ASH Solutions..."
                    style={textareaStyle}
                  />
                </div>
                <button type="submit" disabled={isSubmitting} style={submitButtonStyle}>
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Listings Block */}
        {isLoading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }} className="insights-list">
            
            {/* RENDER CASE STUDIES */}
            {activeTab === 'case-studies' && (
              <>
                {caseStudies.length === 0 ? (
                  <p style={{ textAlign: 'center', color: 'var(--body-text)' }}>No case studies published yet.</p>
                ) : (
                  caseStudies.map((study) => (
                    <div
                      key={study._id}
                      className="glass-panel insight-card"
                      style={{
                        borderRadius: '24px',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        boxShadow: 'var(--card-shadow), var(--card-sheen)',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ fontSize: '11px', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Client: {study.client}
                        </div>
                        <h2 style={{ fontSize: '24px', fontWeight: '900', color: 'var(--title-color)', margin: '4px 0 12px' }}>
                          <a
                            href={`/case-studies/${study._id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              textDecoration: 'none',
                              color: 'inherit',
                              transition: 'color 0.2s',
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#4f46e5'}
                            onMouseLeave={(e) => e.target.style.color = 'inherit'}
                          >
                            {study.title}
                          </a>
                        </h2>
                        <p style={{ color: 'var(--body-text)', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                          {study.description && study.description.length > 180 
                            ? study.description.substring(0, 180) + '...' 
                            : study.description}
                        </p>
                        <div
                          style={{
                            background: 'rgba(99, 102, 241, 0.04)',
                            border: '1px solid rgba(99, 102, 241, 0.1)',
                            borderRadius: '14px',
                            padding: '16px',
                            marginBottom: '20px',
                          }}
                        >
                          <div style={{ fontSize: '11px', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase', marginBottom: '4px' }}>
                            Measurable Outcome
                          </div>
                          <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--title-color)' }}>
                            {study.outcome}
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }} className="service-tags-container">
                          {study.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="service-tag"
                              style={{
                                padding: '4px 10px',
                                borderRadius: '6px',
                                background: 'rgba(15, 23, 42, 0.02)',
                                border: '1px solid rgba(15, 23, 42, 0.08)',
                                fontSize: '12px',
                                color: '#475569',
                                fontWeight: '700',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Footer Actions */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--card-border)', flexWrap: 'wrap', gap: '12px' }}>
                          <a
                            href={`/case-studies/${study._id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontSize: '13px',
                              fontWeight: '800',
                              color: '#4f46e5',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            Read Case Study <span style={{ fontSize: '15px' }}>→</span>
                          </a>
                          
                          {user && user.role === 'admin' && (
                            <button
                              onClick={() => handleDeleteCaseStudy(study._id)}
                              style={{
                                background: 'rgba(239, 68, 68, 0.08)',
                                color: '#ef4444',
                                border: '1px solid rgba(239, 68, 68, 0.15)',
                                borderRadius: '8px',
                                padding: '6px 12px',
                                fontSize: '12px',
                                fontWeight: '750',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.background = '#ef4444';
                                e.target.style.color = '#ffffff';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(239, 68, 68, 0.08)';
                                e.target.style.color = '#ef4444';
                              }}
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </>
            )}

            {/* RENDER BLOGS */}
            {activeTab === 'blogs' && (
              <>
                {blogs.length === 0 ? (
                  <p style={{ textAlign: 'center', color: 'var(--body-text)' }}>No blog posts published yet.</p>
                ) : (
                  blogs.map((post) => (
                    <div
                      key={post._id}
                      className="glass-panel insight-card"
                      style={{
                        borderRadius: '24px',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        boxShadow: 'var(--card-shadow), var(--card-sheen)',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          <span>By {post.author}</span>
                          <span>{new Date(post.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <h2 style={{ fontSize: '24px', fontWeight: '900', color: 'var(--title-color)', margin: '4px 0 16px' }}>
                          {post.title}
                        </h2>
                        <p style={{ color: 'var(--body-text)', fontSize: '15px', lineHeight: '1.7', whiteSpace: 'pre-wrap', marginBottom: '20px' }}>
                          {post.content}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }} className="service-tags-container">
                          {post.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="service-tag"
                              style={{
                                padding: '4px 10px',
                                borderRadius: '6px',
                                background: 'rgba(15, 23, 42, 0.02)',
                                border: '1px solid rgba(15, 23, 42, 0.08)',
                                fontSize: '12px',
                                color: '#475569',
                                fontWeight: '700',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Footer Actions */}
                        {user && user.role === 'admin' && (
                          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid var(--card-border)' }}>
                            <button
                              onClick={() => handleDeleteBlog(post._id)}
                              style={{
                                background: 'rgba(239, 68, 68, 0.08)',
                                color: '#ef4444',
                                border: '1px solid rgba(239, 68, 68, 0.15)',
                                borderRadius: '8px',
                                padding: '6px 12px',
                                fontSize: '12px',
                                fontWeight: '750',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.background = '#ef4444';
                                e.target.style.color = '#ffffff';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(239, 68, 68, 0.08)';
                                e.target.style.color = '#ef4444';
                              }}
                            >
                              Delete Blog
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </>
            )}

            {/* RENDER REVIEWS */}
            {activeTab === 'reviews' && (
              <>
                {reviews.length === 0 ? (
                  <p style={{ textAlign: 'center', color: 'var(--body-text)' }}>No client reviews posted yet.</p>
                ) : (
                  reviews.map((rev) => (
                    <div
                      key={rev._id}
                      className="glass-panel insight-card"
                      style={{
                        borderRadius: '24px',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        boxShadow: 'var(--card-shadow), var(--card-sheen)',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                          <div style={{ color: '#fbbf24', fontSize: '18px', display: 'flex', gap: '2px' }}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i}>{i < rev.rating ? '★' : '☆'}</span>
                            ))}
                          </div>
                          <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>
                            {new Date(rev.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                          </span>
                        </div>
                        <p style={{ color: 'var(--body-text)', fontSize: '15px', lineHeight: '1.7', fontStyle: 'italic', margin: '8px 0 16px' }}>
                          "{rev.comment}"
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              background: 'rgba(99, 102, 241, 0.1)',
                              color: '#4f46e5',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '12px',
                              fontWeight: '900',
                            }}
                          >
                            {rev.userName.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div style={{ fontSize: '14px', fontWeight: '800', color: 'var(--title-color)' }}>
                              {rev.userName}
                            </div>
                            {rev.company && (
                              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>
                                {rev.company}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </>
            )}

          </div>
        )}
      </div>
      <CTASection />
    </div>
  );
}

// Styling components
const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '10px',
  border: '1px solid var(--input-border)',
  background: 'var(--input-bg)',
  color: 'var(--input-text)',
  outline: 'none',
  fontSize: '14px',
  transition: 'all 0.3s',
};

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical',
  fontFamily: 'inherit',
};

const submitButtonStyle = {
  background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
  color: '#FFFFFF',
  border: 'none',
  borderRadius: '12px',
  padding: '14px',
  fontSize: '14px',
  fontWeight: '700',
  cursor: 'pointer',
  marginTop: '10px',
  boxShadow: '0 4px 15px rgba(79, 70, 229, 0.25)',
  transition: 'all 0.3s ease',
};
