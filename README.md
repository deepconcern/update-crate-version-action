# Update crate version action

Updates Rust crate's Cargo.toml version field.

## Inputs

## `path`

Path to the target TOML file to update. Default is `Cargo.toml`.

## `version`

**Required** Version to update to.


## Example usage

uses: deepconcern/update-crate-version-action@latest
with:
  version: 1.2.3