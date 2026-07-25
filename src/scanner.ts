import type{McpServerConfig,ScanFinding,ScanReport}from"./types.js";
export function scanConfig(config:McpServerConfig):ScanReport{const f:ScanFinding[]=[];
 if(config.command==="npx"&&config.args?.includes("-y")&&config.args?.some(a=>a!=="-y"&&!a.includes("@")))f.push({rule:"mcp:unpinned-npx",severity:"high",message:"npx -y without version pin"});
 if(config.env)for(const[k,v]of Object.entries(config.env)){if(v.length>20&&/^sk-|^ghp_|^hf_/i.test(v))f.push({rule:"mcp:inline-secret",severity:"high",message:`Env '${k}' contains secret`});}
 if(config.url&&!config.url.startsWith("https://")&&!config.url.startsWith("http://localhost"))f.push({rule:"mcp:plaintext-transport",severity:"high",message:`HTTP URL: ${config.url}`});
 if((config.transport==="sse"||config.transport==="http")&&(!config.env||!Object.keys(config.env).some(k=>/KEY|TOKEN|AUTH/i.test(k))))f.push({rule:"mcp:no-auth",severity:"medium",message:"HTTP/SSE transport has no auth"});
 return{server:config.name,passed:f.length===0,findings:f};}