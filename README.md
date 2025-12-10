
# CDKTF prebuilt bindings for hashicorp/hcp provider version 0.111.0

HashiCorp made the decision to stop publishing new versions of prebuilt [Terraform hcp provider](https://registry.terraform.io/providers/hashicorp/hcp/0.111.0) bindings for [CDK for Terraform](https://cdk.tf) on December 10, 2025. As such, this repository has been archived and is no longer supported in any way by HashiCorp. Previously-published versions of this prebuilt provider will still continue to be available on their respective package managers (e.g. npm, PyPi, Maven, NuGet), but these will not be compatible with new releases of `cdktf` past `0.21.0` and are no longer eligible for commercial support.

As a reminder, you can continue to use the `hashicorp/hcp` provider in your CDK for Terraform (CDKTF) projects, even with newer versions of CDKTF, but you will need to generate the bindings locally. The easiest way to do so is to use the [`provider add` command](https://developer.hashicorp.com/terraform/cdktf/cli-reference/commands#provider-add), optionally with the `--force-local` flag enabled:

`cdktf provider add hashicorp/hcp --force-local`

For more information and additional examples, check out our documentation on [generating provider bindings manually](https://cdk.tf/imports).

## Deprecated Packages

### NPM

The npm package is available at [https://www.npmjs.com/package/@cdktf/provider-hcp](https://www.npmjs.com/package/@cdktf/provider-hcp).

`npm install @cdktf/provider-hcp`

### PyPI

The PyPI package is available at [https://pypi.org/project/cdktf-cdktf-provider-hcp](https://pypi.org/project/cdktf-cdktf-provider-hcp).

`pipenv install cdktf-cdktf-provider-hcp`

### Nuget

The Nuget package is available at [https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Hcp](https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Hcp).

`dotnet add package HashiCorp.Cdktf.Providers.Hcp`

### Maven

The Maven package is available at [https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-hcp](https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-hcp).

```
<dependency>
    <groupId>com.hashicorp</groupId>
    <artifactId>cdktf-provider-hcp</artifactId>
    <version>[REPLACE WITH DESIRED VERSION]</version>
</dependency>
```

### Go

The go package is generated into the [`github.com/cdktf/cdktf-provider-hcp-go`](https://github.com/cdktf/cdktf-provider-hcp-go) package.

`go get github.com/cdktf/cdktf-provider-hcp-go/hcp/<version>`

Where `<version>` is the version of the prebuilt provider you would like to use e.g. `v11`. The full module name can be found
within the [go.mod](https://github.com/cdktf/cdktf-provider-hcp-go/blob/main/hcp/go.mod#L1) file.

## Docs

Find auto-generated docs for this provider here: 

- [Typescript](./docs/API.typescript.md)
- [Python](./docs/API.python.md)
- [Java](./docs/API.java.md)
- [C#](./docs/API.csharp.md)
- [Go](./docs/API.go.md)

You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktf/provider-hcp).
