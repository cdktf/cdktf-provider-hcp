# `dataHcpHvnPeeringConnection` Submodule <a name="`dataHcpHvnPeeringConnection` Submodule" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpHvnPeeringConnection <a name="DataHcpHvnPeeringConnection" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn_peering_connection hcp_hvn_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcphvnpeeringconnection"

datahcphvnpeeringconnection.NewDataHcpHvnPeeringConnection(scope Construct, id *string, config DataHcpHvnPeeringConnectionConfig) DataHcpHvnPeeringConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig">DataHcpHvnPeeringConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig">DataHcpHvnPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetHvn2">ResetHvn2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.putTimeouts"></a>

```go
func PutTimeouts(value DataHcpHvnPeeringConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts">DataHcpHvnPeeringConnectionTimeouts</a>

---

##### `ResetHvn2` <a name="ResetHvn2" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetHvn2"></a>

```go
func ResetHvn2()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpHvnPeeringConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcphvnpeeringconnection"

datahcphvnpeeringconnection.DataHcpHvnPeeringConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcphvnpeeringconnection"

datahcphvnpeeringconnection.DataHcpHvnPeeringConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcphvnpeeringconnection"

datahcphvnpeeringconnection.DataHcpHvnPeeringConnection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcphvnpeeringconnection"

datahcphvnpeeringconnection.DataHcpHvnPeeringConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataHcpHvnPeeringConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataHcpHvnPeeringConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataHcpHvnPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpHvnPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference">DataHcpHvnPeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn1Input">Hvn1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn2Input">Hvn2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.peeringIdInput">PeeringIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn1">Hvn1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn2">Hvn2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.peeringId">PeeringId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.timeouts"></a>

```go
func Timeouts() DataHcpHvnPeeringConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference">DataHcpHvnPeeringConnectionTimeoutsOutputReference</a>

---

##### `Hvn1Input`<sup>Optional</sup> <a name="Hvn1Input" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn1Input"></a>

```go
func Hvn1Input() *string
```

- *Type:* *string

---

##### `Hvn2Input`<sup>Optional</sup> <a name="Hvn2Input" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn2Input"></a>

```go
func Hvn2Input() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PeeringIdInput`<sup>Optional</sup> <a name="PeeringIdInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.peeringIdInput"></a>

```go
func PeeringIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Hvn1`<sup>Required</sup> <a name="Hvn1" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn1"></a>

```go
func Hvn1() *string
```

- *Type:* *string

---

##### `Hvn2`<sup>Required</sup> <a name="Hvn2" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn2"></a>

```go
func Hvn2() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PeeringId`<sup>Required</sup> <a name="PeeringId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.peeringId"></a>

```go
func PeeringId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpHvnPeeringConnectionConfig <a name="DataHcpHvnPeeringConnectionConfig" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcphvnpeeringconnection"

&datahcphvnpeeringconnection.DataHcpHvnPeeringConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Hvn1: *string,
	PeeringId: *string,
	Hvn2: *string,
	Id: *string,
	ProjectId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-hcp-go/hcp/v9.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.hvn1">Hvn1</a></code> | <code>*string</code> | The unique URL of one of the HVNs being peered. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.peeringId">PeeringId</a></code> | <code>*string</code> | The ID of the peering connection. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.hvn2">Hvn2</a></code> | <code>*string</code> | The unique URL of one of the HVNs being peered. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn_peering_connection#id DataHcpHvnPeeringConnection#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where the HVN peering connection is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts">DataHcpHvnPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Hvn1`<sup>Required</sup> <a name="Hvn1" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.hvn1"></a>

```go
Hvn1 *string
```

- *Type:* *string

The unique URL of one of the HVNs being peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn_peering_connection#hvn_1 DataHcpHvnPeeringConnection#hvn_1}

---

##### `PeeringId`<sup>Required</sup> <a name="PeeringId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.peeringId"></a>

```go
PeeringId *string
```

- *Type:* *string

The ID of the peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn_peering_connection#peering_id DataHcpHvnPeeringConnection#peering_id}

---

##### `Hvn2`<sup>Optional</sup> <a name="Hvn2" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.hvn2"></a>

```go
Hvn2 *string
```

- *Type:* *string

The unique URL of one of the HVNs being peered.

Setting this attribute is deprecated, but it will remain usable in read-only form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn_peering_connection#hvn_2 DataHcpHvnPeeringConnection#hvn_2}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn_peering_connection#id DataHcpHvnPeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where the HVN peering connection is located.

Always matches hvn_1's project ID. Setting this attribute is deprecated, but it will remain usable in read-only form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn_peering_connection#project_id DataHcpHvnPeeringConnection#project_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.timeouts"></a>

```go
Timeouts DataHcpHvnPeeringConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts">DataHcpHvnPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn_peering_connection#timeouts DataHcpHvnPeeringConnection#timeouts}

---

### DataHcpHvnPeeringConnectionTimeouts <a name="DataHcpHvnPeeringConnectionTimeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcphvnpeeringconnection"

&datahcphvnpeeringconnection.DataHcpHvnPeeringConnectionTimeouts {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn_peering_connection#default DataHcpHvnPeeringConnection#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/hvn_peering_connection#default DataHcpHvnPeeringConnection#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpHvnPeeringConnectionTimeoutsOutputReference <a name="DataHcpHvnPeeringConnectionTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcphvnpeeringconnection"

datahcphvnpeeringconnection.NewDataHcpHvnPeeringConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHcpHvnPeeringConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



