import { Vault, TFile } from "obsidian";

/**
 * Get all markdown files in the vault
 * @param vault - The vault instance
 * @returns Array of TFile objects representing markdown files
 */
export function getAllMarkdownFiles(vault: Vault): TFile[] {
	return vault.getMarkdownFiles();
}

/**
 * Read the content of a file in the vault
 * @param vault - The vault instance
 * @param file - The TFile object representing the file to read
 * @returns Promise that resolves to the content of the file as a string
 */
export async function readFile(vault: Vault, file: TFile): Promise<string> {
	return vault.cachedRead(file);
}
