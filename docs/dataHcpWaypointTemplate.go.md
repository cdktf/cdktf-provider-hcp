# `dataHcpWaypointTemplate` Submodule <a name="`dataHcpWaypointTemplate` Submodule" id="@cdktf/provider-hcp.dataHcpWaypointTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpWaypointTemplate <a name="DataHcpWaypointTemplate" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/data-sources/waypoint_template hcp_waypoint_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcpwaypointtemplate"

datahcpwaypointtemplate.NewDataHcpWaypointTemplate(scope Construct, id *string, config DataHcpWaypointTemplateConfig) DataHcpWaypointTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig">DataHcpWaypointTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig">DataHcpWaypointTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetActions"></a>

```go
func ResetActions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetName"></a>

```go
func ResetName()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetProjectId"></a>

```go
func ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpWaypointTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcpwaypointtemplate"

datahcpwaypointtemplate.DataHcpWaypointTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcpwaypointtemplate"

datahcpwaypointtemplate.DataHcpWaypointTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcpwaypointtemplate"

datahcpwaypointtemplate.DataHcpWaypointTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcpwaypointtemplate"

datahcpwaypointtemplate.DataHcpWaypointTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataHcpWaypointTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataHcpWaypointTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataHcpWaypointTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/data-sources/waypoint_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpWaypointTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.readmeMarkdownTemplate">ReadmeMarkdownTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformAgentPoolId">TerraformAgentPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformCloudWorkspaceDetails">TerraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference">DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformExecutionMode">TerraformExecutionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformNoCodeModuleId">TerraformNoCodeModuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformNoCodeModuleSource">TerraformNoCodeModuleSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.variableOptions">VariableOptions</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList">DataHcpWaypointTemplateVariableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ReadmeMarkdownTemplate`<sup>Required</sup> <a name="ReadmeMarkdownTemplate" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.readmeMarkdownTemplate"></a>

```go
func ReadmeMarkdownTemplate() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `TerraformAgentPoolId`<sup>Required</sup> <a name="TerraformAgentPoolId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformAgentPoolId"></a>

```go
func TerraformAgentPoolId() *string
```

- *Type:* *string

---

##### `TerraformCloudWorkspaceDetails`<sup>Required</sup> <a name="TerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformCloudWorkspaceDetails"></a>

```go
func TerraformCloudWorkspaceDetails() DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference">DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `TerraformExecutionMode`<sup>Required</sup> <a name="TerraformExecutionMode" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformExecutionMode"></a>

```go
func TerraformExecutionMode() *string
```

- *Type:* *string

---

##### `TerraformNoCodeModuleId`<sup>Required</sup> <a name="TerraformNoCodeModuleId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformNoCodeModuleId"></a>

```go
func TerraformNoCodeModuleId() *string
```

- *Type:* *string

---

##### `TerraformNoCodeModuleSource`<sup>Required</sup> <a name="TerraformNoCodeModuleSource" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformNoCodeModuleSource"></a>

```go
func TerraformNoCodeModuleSource() *string
```

- *Type:* *string

---

##### `VariableOptions`<sup>Required</sup> <a name="VariableOptions" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.variableOptions"></a>

```go
func VariableOptions() DataHcpWaypointTemplateVariableOptionsList
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList">DataHcpWaypointTemplateVariableOptionsList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpWaypointTemplateConfig <a name="DataHcpWaypointTemplateConfig" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcpwaypointtemplate"

&datahcpwaypointtemplate.DataHcpWaypointTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Actions: *[]*string,
	Id: *string,
	Name: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.actions">Actions</a></code> | <code>*[]*string</code> | List of actions by 'ID' to assign to this Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.id">Id</a></code> | <code>*string</code> | The ID of the Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where the Waypoint Template is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

List of actions by 'ID' to assign to this Template.

Applications created from this Template will have these actions assigned to them. Only 'ID' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/data-sources/waypoint_template#actions DataHcpWaypointTemplate#actions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/data-sources/waypoint_template#id DataHcpWaypointTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/data-sources/waypoint_template#name DataHcpWaypointTemplate#name}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where the Waypoint Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/data-sources/waypoint_template#project_id DataHcpWaypointTemplate#project_id}

---

### DataHcpWaypointTemplateTerraformCloudWorkspaceDetails <a name="DataHcpWaypointTemplateTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcpwaypointtemplate"

&datahcpwaypointtemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetails {

}
```


### DataHcpWaypointTemplateVariableOptions <a name="DataHcpWaypointTemplateVariableOptions" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcpwaypointtemplate"

&datahcpwaypointtemplate.DataHcpWaypointTemplateVariableOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference <a name="DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcpwaypointtemplate"

datahcpwaypointtemplate.NewDataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">TerraformProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetails">DataHcpWaypointTemplateTerraformCloudWorkspaceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformProjectId`<sup>Required</sup> <a name="TerraformProjectId" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```go
func TerraformProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataHcpWaypointTemplateTerraformCloudWorkspaceDetails
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetails">DataHcpWaypointTemplateTerraformCloudWorkspaceDetails</a>

---


### DataHcpWaypointTemplateVariableOptionsList <a name="DataHcpWaypointTemplateVariableOptionsList" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcpwaypointtemplate"

datahcpwaypointtemplate.NewDataHcpWaypointTemplateVariableOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataHcpWaypointTemplateVariableOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.get"></a>

```go
func Get(index *f64) DataHcpWaypointTemplateVariableOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataHcpWaypointTemplateVariableOptionsOutputReference <a name="DataHcpWaypointTemplateVariableOptionsOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/datahcpwaypointtemplate"

datahcpwaypointtemplate.NewDataHcpWaypointTemplateVariableOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataHcpWaypointTemplateVariableOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.options">Options</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.userEditable">UserEditable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.variableType">VariableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptions">DataHcpWaypointTemplateVariableOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.options"></a>

```go
func Options() *[]*string
```

- *Type:* *[]*string

---

##### `UserEditable`<sup>Required</sup> <a name="UserEditable" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.userEditable"></a>

```go
func UserEditable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.variableType"></a>

```go
func VariableType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataHcpWaypointTemplateVariableOptions
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptions">DataHcpWaypointTemplateVariableOptions</a>

---



