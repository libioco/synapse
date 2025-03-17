import { Plugin } from "obsidian";
import { getAllMarkdownFiles, readFile } from "./utils/fileUtils";

export default class MyPlugin extends Plugin {
	async onload() {
		console.log("Loading Synapse...");

		const vault = this.app.vault;
		const allMarkdownFiles = getAllMarkdownFiles(vault);

		for (const file of allMarkdownFiles) {
			const contents = readFile(vault, file);
			console.log(`Contents of ${file.name}:`, contents);
		}
	}

	onunload() {
		console.log("Unloading Synapse");
	}
}
