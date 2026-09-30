export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: '3d-web-development-threejs',
    title: 'Getting Started with 3D Web Development using Three.js',
    excerpt: 'Learn how to create immersive 3D experiences on the web using Three.js and React Three Fiber.',
    content: `
      <h2>Introduction to Three.js</h2>
      <p>Three.js is a powerful library that makes WebGL easier to use. With React Three Fiber, we can compose 3D scenes declaratively.</p>
      
      <h3>Setting up the Scene</h3>
      <p>Every 3D scene needs three core components: a scene, a camera, and a renderer.</p>
      <pre><code>const scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);</code></pre>
      
      <h3>Adding Geometries</h3>
      <p>Geometries are the shapes of our 3D objects. A simple box geometry is a great starting point.</p>
      <p>With R3F, creating a mesh is as simple as:</p>
      <pre><code>&lt;mesh&gt;\n  &lt;boxGeometry args={[1, 1, 1]} /&gt;\n  &lt;meshStandardMaterial color="hotpink" /&gt;\n&lt;/mesh&gt;</code></pre>
      
      <h3>Conclusion</h3>
      <p>3D on the web is more accessible than ever. Start building your immersive experiences today!</p>
    `,
    category: '3D Graphics',
    author: { name: 'Alex Developer', role: 'Frontend Engineer', avatar: '' },
    date: 'Oct 24, 2026',
    readTime: '6 min read',
    tags: ['Three.js', 'WebGL', 'React'],
    featured: true,
  },
  {
    id: '2',
    slug: 'mastering-nextjs-app-router',
    title: 'Mastering the Next.js App Router',
    excerpt: 'A comprehensive guide to the new routing paradigm in Next.js 13+ and how it improves performance.',
    content: '<p>Next.js App Router provides new features like React Server Components and nested layouts...</p>',
    category: 'Web Dev',
    author: { name: 'Sarah Coder', role: 'Fullstack Dev', avatar: '' },
    date: 'Oct 20, 2026',
    readTime: '8 min read',
    tags: ['Next.js', 'React', 'Server Components'],
    featured: false,
  },
  {
    id: '3',
    slug: 'ai-driven-interfaces',
    title: 'Designing AI-Driven User Interfaces',
    excerpt: 'How machine learning models are changing the way we interact with web applications.',
    content: '<p>AI is transforming UI design by providing personalized experiences and intelligent components...</p>',
    category: 'AI/ML',
    author: { name: 'Jordan AI', role: 'ML Researcher', avatar: '' },
    date: 'Oct 15, 2026',
    readTime: '5 min read',
    tags: ['AI', 'UI/UX', 'Machine Learning'],
    featured: true,
  },
  {
    id: '4',
    slug: 'advanced-css-animations',
    title: 'Advanced CSS Animations for Modern UIs',
    excerpt: 'Elevate your user experience with performant, complex CSS animations and transitions.',
    content: '<p>CSS animations allow for buttery smooth transitions without the JavaScript overhead...</p>',
    category: 'Design',
    author: { name: 'Mia Design', role: 'UI/UX Designer', avatar: '' },
    date: 'Oct 10, 2026',
    readTime: '4 min read',
    tags: ['CSS', 'Animation', 'Design'],
    featured: false,
  },
  {
    id: '5',
    slug: 'optimizing-react-performance',
    title: 'Optimizing React Performance at Scale',
    excerpt: 'Strategies for keeping your React applications fast and responsive as they grow in complexity.',
    content: '<p>Learn about memoization, lazy loading, and concurrent features in React...</p>',
    category: 'Web Dev',
    author: { name: 'Alex Developer', role: 'Frontend Engineer', avatar: '' },
    date: 'Oct 5, 2026',
    readTime: '10 min read',
    tags: ['React', 'Performance', 'Optimization'],
    featured: false,
  },
  {
    id: '6',
    slug: 'future-of-webgl',
    title: 'The Future of WebGL and WebGPU',
    excerpt: 'Exploring what WebGPU means for the next generation of web-based graphics and computing.',
    content: '<p>WebGPU promises to bring modern graphics APIs to the web, unlocking unprecedented performance...</p>',
    category: '3D Graphics',
    author: { name: 'Chris Graphics', role: 'Graphics Programmer', avatar: '' },
    date: 'Sep 28, 2026',
    readTime: '7 min read',
    tags: ['WebGL', 'WebGPU', 'Graphics'],
    featured: false,
  }
];
