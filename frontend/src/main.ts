import { Plugin } from "obsidian";
import { createVaultPayload } from "./core/init";

export default class MyPlugin extends Plugin {
	async onload() {
		console.log("Loading Synapse...");

		const vault = this.app.vault;
		const payload = await createVaultPayload(vault);

		// console.log("Payload: ", payload);
		console.log("Metadata: ", this.app.metadataCache);
	}

	onunload() {
		console.log("Unloading Synapse");
	}
}
