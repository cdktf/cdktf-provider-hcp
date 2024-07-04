# `dataHcpWaypointAddOnDefinition` Submodule <a name="`dataHcpWaypointAddOnDefinition` Submodule" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpWaypointAddOnDefinition <a name="DataHcpWaypointAddOnDefinition" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/data-sources/waypoint_add_on_definition hcp_waypoint_add_on_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointaddondefinition"

datahcpwaypointaddondefinition.NewDataHcpWaypointAddOnDefinition(scope Construct, id *string, config DataHcpWaypointAddOnDefinitionConfig) DataHcpWaypointAddOnDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig">DataHcpWaypointAddOnDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig">DataHcpWaypointAddOnDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.resetName"></a>

```go
func ResetName()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.resetProjectId"></a>

```go
func ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpWaypointAddOnDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointaddondefinition"

datahcpwaypointaddondefinition.DataHcpWaypointAddOnDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointaddondefinition"

datahcpwaypointaddondefinition.DataHcpWaypointAddOnDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointaddondefinition"

datahcpwaypointaddondefinition.DataHcpWaypointAddOnDefinition_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointaddondefinition"

datahcpwaypointaddondefinition.DataHcpWaypointAddOnDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataHcpWaypointAddOnDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataHcpWaypointAddOnDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataHcpWaypointAddOnDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/data-sources/waypoint_add_on_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpWaypointAddOnDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.readmeMarkdownTemplate">ReadmeMarkdownTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.terraformCloudWorkspaceDetails">TerraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference">DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.terraformNoCodeModule">TerraformNoCodeModule</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference">DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.variableOptions">VariableOptions</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList">DataHcpWaypointAddOnDefinitionVariableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ReadmeMarkdownTemplate`<sup>Required</sup> <a name="ReadmeMarkdownTemplate" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.readmeMarkdownTemplate"></a>

```go
func ReadmeMarkdownTemplate() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `TerraformCloudWorkspaceDetails`<sup>Required</sup> <a name="TerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.terraformCloudWorkspaceDetails"></a>

```go
func TerraformCloudWorkspaceDetails() DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference">DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `TerraformNoCodeModule`<sup>Required</sup> <a name="TerraformNoCodeModule" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.terraformNoCodeModule"></a>

```go
func TerraformNoCodeModule() DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference">DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference</a>

---

##### `VariableOptions`<sup>Required</sup> <a name="VariableOptions" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.variableOptions"></a>

```go
func VariableOptions() DataHcpWaypointAddOnDefinitionVariableOptionsList
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList">DataHcpWaypointAddOnDefinitionVariableOptionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpWaypointAddOnDefinitionConfig <a name="DataHcpWaypointAddOnDefinitionConfig" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointaddondefinition"

&datahcpwaypointaddondefinition.DataHcpWaypointAddOnDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Name: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | The ID of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where the Waypoint Add-on Definition is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/data-sources/waypoint_add_on_definition#id DataHcpWaypointAddOnDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/data-sources/waypoint_add_on_definition#name DataHcpWaypointAddOnDefinition#name}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where the Waypoint Add-on Definition is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.0/docs/data-sources/waypoint_add_on_definition#project_id DataHcpWaypointAddOnDefinition#project_id}

---

### DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetails <a name="DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointaddondefinition"

&datahcpwaypointaddondefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetails {

}
```


### DataHcpWaypointAddOnDefinitionTerraformNoCodeModule <a name="DataHcpWaypointAddOnDefinitionTerraformNoCodeModule" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointaddondefinition"

&datahcpwaypointaddondefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModule {

}
```


### DataHcpWaypointAddOnDefinitionVariableOptions <a name="DataHcpWaypointAddOnDefinitionVariableOptions" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointaddondefinition"

&datahcpwaypointaddondefinition.DataHcpWaypointAddOnDefinitionVariableOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference <a name="DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointaddondefinition"

datahcpwaypointaddondefinition.NewDataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">TerraformProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetails">DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformProjectId`<sup>Required</sup> <a name="TerraformProjectId" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```go
func TerraformProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetails
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetails">DataHcpWaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>

---


### DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference <a name="DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointaddondefinition"

datahcpwaypointaddondefinition.NewDataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModule">DataHcpWaypointAddOnDefinitionTerraformNoCodeModule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataHcpWaypointAddOnDefinitionTerraformNoCodeModule
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionTerraformNoCodeModule">DataHcpWaypointAddOnDefinitionTerraformNoCodeModule</a>

---


### DataHcpWaypointAddOnDefinitionVariableOptionsList <a name="DataHcpWaypointAddOnDefinitionVariableOptionsList" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointaddondefinition"

datahcpwaypointaddondefinition.NewDataHcpWaypointAddOnDefinitionVariableOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataHcpWaypointAddOnDefinitionVariableOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.get"></a>

```go
func Get(index *f64) DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference <a name="DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointaddondefinition"

datahcpwaypointaddondefinition.NewDataHcpWaypointAddOnDefinitionVariableOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.options">Options</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditable">UserEditable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.variableType">VariableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptions">DataHcpWaypointAddOnDefinitionVariableOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.options"></a>

```go
func Options() *[]*string
```

- *Type:* *[]*string

---

##### `UserEditable`<sup>Required</sup> <a name="UserEditable" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditable"></a>

```go
func UserEditable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.variableType"></a>

```go
func VariableType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataHcpWaypointAddOnDefinitionVariableOptions
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAddOnDefinition.DataHcpWaypointAddOnDefinitionVariableOptions">DataHcpWaypointAddOnDefinitionVariableOptions</a>

---



