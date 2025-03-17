import { Vault, TFile } from "obsidian";

export function getAllMarkdownFiles(vault: Vault): TFile[] {
	return vault.getMarkdownFiles();
}

export async function readFile(vault: Vault, file: TFile): Promise<string> {
	return await vault.cachedRead(file);
}
