"use client"; // This directive is necessary because we use hooks like useState

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// This is the initial content that will appear in the editor
const defaultMarkdown = `
# Welcome to Your Live Markdown Editor!

## Type your Markdown on the left, and see it rendered on the right.

---

### Features

- **Real-time preview**
- Supports GitHub Flavored Markdown (GFM)
- Simple, clean interface

### Example Code Block

\`\`\`javascript
// This is a javascript code block
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Developer"));
\`\`\`

### Example List

1.  First item
2.  Second item
3.  Third item

> This is a blockquote. Feel free to clear this and start typing!
`;

export default function Home() {
  // We use the 'useState' hook to store the text from the editor.
  // 'markdown' is the variable holding the text, and 'setMarkdown' is the function to update it.
  const [markdown, setMarkdown] = useState<string>(defaultMarkdown);

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-6">Markdown Live Editor</h1>
        
        {/* This is the main grid for our two-panel layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[75vh]">

          {/* Panel 1: The Text Editor */}
          <div className="flex flex-col">
            <label htmlFor="editor" className="text-lg mb-2 font-semibold">Editor</label>
            <textarea
              id="editor"
              className="w-full h-full p-4 rounded-lg bg-slate-800 border border-slate-600 text-slate-200 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </div>

          {/* Panel 2: The Live Preview */}
          <div className="flex flex-col">
            <label htmlFor="preview" className="text-lg mb-2 font-semibold">Preview</label>
            <div
              id="preview"
              className="w-full h-full p-4 rounded-lg bg-slate-800 border border-slate-600 overflow-auto prose prose-invert max-w-none"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
