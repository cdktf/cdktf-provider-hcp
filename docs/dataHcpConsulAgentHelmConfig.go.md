# `dataHcpConsulAgentHelmConfig` Submodule <a name="`dataHcpConsulAgentHelmConfig` Submodule" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpConsulAgentHelmConfig <a name="DataHcpConsulAgentHelmConfig" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs/data-sources/consul_agent_helm_config hcp_consul_agent_helm_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpconsulagenthelmconfig"

datahcpconsulagenthelmconfig.NewDataHcpConsulAgentHelmConfig(scope Construct, id *string, config DataHcpConsulAgentHelmConfigConfig) DataHcpConsulAgentHelmConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig">DataHcpConsulAgentHelmConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig">DataHcpConsulAgentHelmConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetExposeGossipPorts">ResetExposeGossipPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.putTimeouts"></a>

```go
func PutTimeouts(value DataHcpConsulAgentHelmConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts">DataHcpConsulAgentHelmConfigTimeouts</a>

---

##### `ResetExposeGossipPorts` <a name="ResetExposeGossipPorts" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetExposeGossipPorts"></a>

```go
func ResetExposeGossipPorts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpConsulAgentHelmConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpconsulagenthelmconfig"

datahcpconsulagenthelmconfig.DataHcpConsulAgentHelmConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpconsulagenthelmconfig"

datahcpconsulagenthelmconfig.DataHcpConsulAgentHelmConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpconsulagenthelmconfig"

datahcpconsulagenthelmconfig.DataHcpConsulAgentHelmConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpconsulagenthelmconfig"

datahcpconsulagenthelmconfig.DataHcpConsulAgentHelmConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataHcpConsulAgentHelmConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataHcpConsulAgentHelmConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataHcpConsulAgentHelmConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs/data-sources/consul_agent_helm_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpConsulAgentHelmConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.config">Config</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference">DataHcpConsulAgentHelmConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.exposeGossipPortsInput">ExposeGossipPortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.kubernetesEndpointInput">KubernetesEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.exposeGossipPorts">ExposeGossipPorts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.kubernetesEndpoint">KubernetesEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.config"></a>

```go
func Config() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.timeouts"></a>

```go
func Timeouts() DataHcpConsulAgentHelmConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference">DataHcpConsulAgentHelmConfigTimeoutsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ExposeGossipPortsInput`<sup>Optional</sup> <a name="ExposeGossipPortsInput" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.exposeGossipPortsInput"></a>

```go
func ExposeGossipPortsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesEndpointInput`<sup>Optional</sup> <a name="KubernetesEndpointInput" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.kubernetesEndpointInput"></a>

```go
func KubernetesEndpointInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ExposeGossipPorts`<sup>Required</sup> <a name="ExposeGossipPorts" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.exposeGossipPorts"></a>

```go
func ExposeGossipPorts() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesEndpoint`<sup>Required</sup> <a name="KubernetesEndpoint" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.kubernetesEndpoint"></a>

```go
func KubernetesEndpoint() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpConsulAgentHelmConfigConfig <a name="DataHcpConsulAgentHelmConfigConfig" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpconsulagenthelmconfig"

&datahcpconsulagenthelmconfig.DataHcpConsulAgentHelmConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	KubernetesEndpoint: *string,
	ExposeGossipPorts: interface{},
	Id: *string,
	ProjectId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-hcp-go/hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | The ID of the HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.kubernetesEndpoint">KubernetesEndpoint</a></code> | <code>*string</code> | The FQDN for the Kubernetes API. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.exposeGossipPorts">ExposeGossipPorts</a></code> | <code>interface{}</code> | Denotes that the gossip ports should be exposed. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs/data-sources/consul_agent_helm_config#id DataHcpConsulAgentHelmConfig#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where the HCP Consul cluster is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts">DataHcpConsulAgentHelmConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

The ID of the HCP Consul cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs/data-sources/consul_agent_helm_config#cluster_id DataHcpConsulAgentHelmConfig#cluster_id}

---

##### `KubernetesEndpoint`<sup>Required</sup> <a name="KubernetesEndpoint" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.kubernetesEndpoint"></a>

```go
KubernetesEndpoint *string
```

- *Type:* *string

The FQDN for the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs/data-sources/consul_agent_helm_config#kubernetes_endpoint DataHcpConsulAgentHelmConfig#kubernetes_endpoint}

---

##### `ExposeGossipPorts`<sup>Optional</sup> <a name="ExposeGossipPorts" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.exposeGossipPorts"></a>

```go
ExposeGossipPorts interface{}
```

- *Type:* interface{}

Denotes that the gossip ports should be exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs/data-sources/consul_agent_helm_config#expose_gossip_ports DataHcpConsulAgentHelmConfig#expose_gossip_ports}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs/data-sources/consul_agent_helm_config#id DataHcpConsulAgentHelmConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where the HCP Consul cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs/data-sources/consul_agent_helm_config#project_id DataHcpConsulAgentHelmConfig#project_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigConfig.property.timeouts"></a>

```go
Timeouts DataHcpConsulAgentHelmConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts">DataHcpConsulAgentHelmConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs/data-sources/consul_agent_helm_config#timeouts DataHcpConsulAgentHelmConfig#timeouts}

---

### DataHcpConsulAgentHelmConfigTimeouts <a name="DataHcpConsulAgentHelmConfigTimeouts" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpconsulagenthelmconfig"

&datahcpconsulagenthelmconfig.DataHcpConsulAgentHelmConfigTimeouts {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs/data-sources/consul_agent_helm_config#default DataHcpConsulAgentHelmConfig#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.79.0/docs/data-sources/consul_agent_helm_config#default DataHcpConsulAgentHelmConfig#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpConsulAgentHelmConfigTimeoutsOutputReference <a name="DataHcpConsulAgentHelmConfigTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpconsulagenthelmconfig"

datahcpconsulagenthelmconfig.NewDataHcpConsulAgentHelmConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHcpConsulAgentHelmConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpConsulAgentHelmConfig.DataHcpConsulAgentHelmConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



