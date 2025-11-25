const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(process.cwd(),'content','tools');
const outDir = path.join(process.cwd(),'data');
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir,{recursive:true});
const outFile = path.join(outDir,'tools.json');

const files = fs.readdirSync(contentDir).filter(f=>f.endsWith('.md')||f.endsWith('.markdown'));
const items = files.map((fn, idx)=>{
  const full = path.join(contentDir, fn);
  const raw = fs.readFileSync(full,'utf8');
  const parsed = matter(raw);
  const data = parsed.data;
  // normalize fields
  return {
    id: data.id || idx+1,
    name: data.name || data.title || '',
    desc: data.desc || data.description || '',
    url: data.url || data.website || '',
    logo: data.logo || '',
    tags: data.tags || [],
    pricing: data.pricing || '',
    category: data.category || '',
    featured: !!data.featured,
    region: data.region || '',
    added: data.added || ''
  };
});

fs.writeFileSync(outFile, JSON.stringify(items, null, 2));
console.log('Wrote', outFile);
