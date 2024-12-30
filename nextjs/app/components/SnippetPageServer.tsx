import { SnippetPageClient } from "./SnippetPageClient";

export function SnippetPageServer() {
  // fetch default values
  // fetch saved inputs
  // server-side state

  const pageDefaults = { itemName: "this item name" };

  return <SnippetPageClient defaults={pageDefaults} />;
}
