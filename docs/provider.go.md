# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-hcp.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HcpProvider <a name="HcpProvider" id="@cdktf/provider-hcp.provider.HcpProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs hcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/provider"

provider.NewHcpProvider(scope Construct, id *string, config HcpProviderConfig) HcpProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig">HcpProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.provider.HcpProviderConfig">HcpProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetCredentialFile">ResetCredentialFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetWorkloadIdentity">ResetWorkloadIdentity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.provider.HcpProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.provider.HcpProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.provider.HcpProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.provider.HcpProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.provider.HcpProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.provider.HcpProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.provider.HcpProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.provider.HcpProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.provider.HcpProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-hcp.provider.HcpProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-hcp.provider.HcpProvider.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-hcp.provider.HcpProvider.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetCredentialFile` <a name="ResetCredentialFile" id="@cdktf/provider-hcp.provider.HcpProvider.resetCredentialFile"></a>

```go
func ResetCredentialFile()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.provider.HcpProvider.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetWorkloadIdentity` <a name="ResetWorkloadIdentity" id="@cdktf/provider-hcp.provider.HcpProvider.resetWorkloadIdentity"></a>

```go
func ResetWorkloadIdentity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HcpProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.provider.HcpProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/provider"

provider.HcpProvider_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.provider.HcpProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.provider.HcpProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/provider"

provider.HcpProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.provider.HcpProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-hcp.provider.HcpProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/provider"

provider.HcpProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.provider.HcpProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.provider.HcpProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/provider"

provider.HcpProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a HcpProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.provider.HcpProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.provider.HcpProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HcpProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.provider.HcpProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HcpProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.provider.HcpProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the HcpProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.credentialFileInput">CredentialFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.workloadIdentityInput">WorkloadIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.credentialFile">CredentialFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.workloadIdentity">WorkloadIdentity</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.provider.HcpProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.provider.HcpProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.provider.HcpProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.provider.HcpProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-hcp.provider.HcpProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.provider.HcpProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.provider.HcpProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-hcp.provider.HcpProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-hcp.provider.HcpProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `CredentialFileInput`<sup>Optional</sup> <a name="CredentialFileInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.credentialFileInput"></a>

```go
func CredentialFileInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `WorkloadIdentityInput`<sup>Optional</sup> <a name="WorkloadIdentityInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.workloadIdentityInput"></a>

```go
func WorkloadIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-hcp.provider.HcpProvider.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-hcp.provider.HcpProvider.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `CredentialFile`<sup>Optional</sup> <a name="CredentialFile" id="@cdktf/provider-hcp.provider.HcpProvider.property.credentialFile"></a>

```go
func CredentialFile() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.provider.HcpProvider.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `WorkloadIdentity`<sup>Optional</sup> <a name="WorkloadIdentity" id="@cdktf/provider-hcp.provider.HcpProvider.property.workloadIdentity"></a>

```go
func WorkloadIdentity() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.provider.HcpProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HcpProviderConfig <a name="HcpProviderConfig" id="@cdktf/provider-hcp.provider.HcpProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.provider.HcpProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/provider"

&provider.HcpProviderConfig {
	Alias: *string,
	ClientId: *string,
	ClientSecret: *string,
	CredentialFile: *string,
	ProjectId: *string,
	WorkloadIdentity: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The OAuth2 Client ID for API operations. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The OAuth2 Client Secret for API operations. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.credentialFile">CredentialFile</a></code> | <code>*string</code> | The path to an HCP credential file to use to authenticate the provider to HCP. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The default project in which resources should be created. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.workloadIdentity">WorkloadIdentity</a></code> | <code>interface{}</code> | workload_identity block. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs#alias HcpProvider#alias}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The OAuth2 Client ID for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs#client_id HcpProvider#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The OAuth2 Client Secret for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs#client_secret HcpProvider#client_secret}

---

##### `CredentialFile`<sup>Optional</sup> <a name="CredentialFile" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.credentialFile"></a>

```go
CredentialFile *string
```

- *Type:* *string

The path to an HCP credential file to use to authenticate the provider to HCP.

You can alternatively set the HCP_CRED_FILE environment variable to point at a credential file as well. Using a credential file allows you to authenticate the provider as a service principal via client credentials or dynamically based on Workload Identity Federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs#credential_file HcpProvider#credential_file}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The default project in which resources should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs#project_id HcpProvider#project_id}

---

##### `WorkloadIdentity`<sup>Optional</sup> <a name="WorkloadIdentity" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.workloadIdentity"></a>

```go
WorkloadIdentity interface{}
```

- *Type:* interface{}

workload_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs#workload_identity HcpProvider#workload_identity}

---

### HcpProviderWorkloadIdentity <a name="HcpProviderWorkloadIdentity" id="@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/provider"

&provider.HcpProviderWorkloadIdentity {
	ResourceName: *string,
	TokenFile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity.property.resourceName">ResourceName</a></code> | <code>*string</code> | The resource_name of the Workload Identity Provider to exchange the token with. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity.property.tokenFile">TokenFile</a></code> | <code>*string</code> | The path to a file containing a JWT token retrieved from an OpenID Connect (OIDC) or OAuth2 provider. |

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

The resource_name of the Workload Identity Provider to exchange the token with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs#resource_name HcpProvider#resource_name}

---

##### `TokenFile`<sup>Required</sup> <a name="TokenFile" id="@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity.property.tokenFile"></a>

```go
TokenFile *string
```

- *Type:* *string

The path to a file containing a JWT token retrieved from an OpenID Connect (OIDC) or OAuth2 provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs#token_file HcpProvider#token_file}

---



