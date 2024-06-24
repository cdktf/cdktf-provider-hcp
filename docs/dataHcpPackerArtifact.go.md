# `dataHcpPackerArtifact` Submodule <a name="`dataHcpPackerArtifact` Submodule" id="@cdktf/provider-hcp.dataHcpPackerArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpPackerArtifact <a name="DataHcpPackerArtifact" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.92.0/docs/data-sources/packer_artifact hcp_packer_artifact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcppackerartifact"

datahcppackerartifact.NewDataHcpPackerArtifact(scope Construct, id *string, config DataHcpPackerArtifactConfig) DataHcpPackerArtifact
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig">DataHcpPackerArtifactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig">DataHcpPackerArtifactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetChannelName">ResetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetComponentType">ResetComponentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetVersionFingerprint">ResetVersionFingerprint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetChannelName"></a>

```go
func ResetChannelName()
```

##### `ResetComponentType` <a name="ResetComponentType" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetComponentType"></a>

```go
func ResetComponentType()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetVersionFingerprint` <a name="ResetVersionFingerprint" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetVersionFingerprint"></a>

```go
func ResetVersionFingerprint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpPackerArtifact resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcppackerartifact"

datahcppackerartifact.DataHcpPackerArtifact_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcppackerartifact"

datahcppackerartifact.DataHcpPackerArtifact_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcppackerartifact"

datahcppackerartifact.DataHcpPackerArtifact_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcppackerartifact"

datahcppackerartifact.DataHcpPackerArtifact_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataHcpPackerArtifact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataHcpPackerArtifact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataHcpPackerArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.92.0/docs/data-sources/packer_artifact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpPackerArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.buildId">BuildId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.externalIdentifier">ExternalIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.packerRunUuid">PackerRunUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.revokeAt">RevokeAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentTypeInput">ComponentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platformInput">PlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprintInput">VersionFingerprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentType">ComponentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprint">VersionFingerprint</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BuildId`<sup>Required</sup> <a name="BuildId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.buildId"></a>

```go
func BuildId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `ExternalIdentifier`<sup>Required</sup> <a name="ExternalIdentifier" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.externalIdentifier"></a>

```go
func ExternalIdentifier() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `PackerRunUuid`<sup>Required</sup> <a name="PackerRunUuid" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.packerRunUuid"></a>

```go
func PackerRunUuid() *string
```

- *Type:* *string

---

##### `RevokeAt`<sup>Required</sup> <a name="RevokeAt" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.revokeAt"></a>

```go
func RevokeAt() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `ComponentTypeInput`<sup>Optional</sup> <a name="ComponentTypeInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentTypeInput"></a>

```go
func ComponentTypeInput() *string
```

- *Type:* *string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platformInput"></a>

```go
func PlatformInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `VersionFingerprintInput`<sup>Optional</sup> <a name="VersionFingerprintInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprintInput"></a>

```go
func VersionFingerprintInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentType"></a>

```go
func ComponentType() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `VersionFingerprint`<sup>Required</sup> <a name="VersionFingerprint" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprint"></a>

```go
func VersionFingerprint() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpPackerArtifactConfig <a name="DataHcpPackerArtifactConfig" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcppackerartifact"

&datahcppackerartifact.DataHcpPackerArtifactConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BucketName: *string,
	Platform: *string,
	Region: *string,
	ChannelName: *string,
	ComponentType: *string,
	ProjectId: *string,
	VersionFingerprint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | The name of the HCP Packer Bucket where the Artifact is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.platform">Platform</a></code> | <code>*string</code> | Name of the platform where the HCP Packer Artifact is stored. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.region">Region</a></code> | <code>*string</code> | The Region where the HCP Packer Artifact is stored, if any. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | The name of the HCP Packer Channel the Version containing this Artifact is assigned to. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.componentType">ComponentType</a></code> | <code>*string</code> | Name of the Packer builder that built this Artifact. Ex: `amazon-ebs.example`. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP Organization where the Artifact is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.versionFingerprint">VersionFingerprint</a></code> | <code>*string</code> | The fingerprint of the HCP Packer Version where the Artifact is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The name of the HCP Packer Bucket where the Artifact is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.92.0/docs/data-sources/packer_artifact#bucket_name DataHcpPackerArtifact#bucket_name}

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.platform"></a>

```go
Platform *string
```

- *Type:* *string

Name of the platform where the HCP Packer Artifact is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.92.0/docs/data-sources/packer_artifact#platform DataHcpPackerArtifact#platform}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The Region where the HCP Packer Artifact is stored, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.92.0/docs/data-sources/packer_artifact#region DataHcpPackerArtifact#region}

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

The name of the HCP Packer Channel the Version containing this Artifact is assigned to.

The Version currently assigned to the Channel will be fetched.
Exactly one of `channel_name` or `version_fingerprint` must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.92.0/docs/data-sources/packer_artifact#channel_name DataHcpPackerArtifact#channel_name}

---

##### `ComponentType`<sup>Optional</sup> <a name="ComponentType" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.componentType"></a>

```go
ComponentType *string
```

- *Type:* *string

Name of the Packer builder that built this Artifact. Ex: `amazon-ebs.example`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.92.0/docs/data-sources/packer_artifact#component_type DataHcpPackerArtifact#component_type}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP Organization where the Artifact is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.92.0/docs/data-sources/packer_artifact#project_id DataHcpPackerArtifact#project_id}

---

##### `VersionFingerprint`<sup>Optional</sup> <a name="VersionFingerprint" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.versionFingerprint"></a>

```go
VersionFingerprint *string
```

- *Type:* *string

The fingerprint of the HCP Packer Version where the Artifact is located.

If provided in the config, it is used to fetch the Version.
Exactly one of `channel_name` or `version_fingerprint` must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.92.0/docs/data-sources/packer_artifact#version_fingerprint DataHcpPackerArtifact#version_fingerprint}

---



