import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {tags, articles} from "./data/data.js";

// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});

// Add an addition tool
server.tool("get_tags", "it gives you all tags of the articles",
  { },
  async () => ({
    content: [{ type: "text", text: JSON.stringify(tags) }]
  })
);

server.tool("get_articles_by_tag", "it gives you all the articles with selected tag",
  {tag: z.string()},
  async ({tag}) => {
    const filteredArticles = articles.filter((article) => article.tags.map((element) => element.toLowerCase()).includes(tag.toLowerCase()));
    return {
      content: [{ type: "text", text: JSON.stringify(filteredArticles) }]
    }
  }
);

server.tool("get_articles", "it gives you all articles ",
  {},
  async () => {
    return {
      content: [{ type: "text", text: JSON.stringify(articles) }]
    }
  }
);


// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport); // ignore this error, it's given because of nextjs codebase