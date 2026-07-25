# mcp-security-scan

Lightweight MCP security scanner. Detect unpinned packages, secrets, plaintext transport.

```typescript
import { scanConfig } from "mcp-security-scan";
scanConfig({ name: "my-server", command: "npx", args: ["-y", "pkg"] });
// { passed: false, findings: [{ rule: "mcp:unpinned-npx", severity: "high" }] }
```

MIT
