# `dataHcpWaypointApplication` Submodule <a name="`dataHcpWaypointApplication` Submodule" id="@cdktf/provider-hcp.dataHcpWaypointApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpWaypointApplication <a name="DataHcpWaypointApplication" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/waypoint_application hcp_waypoint_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointapplication"

datahcpwaypointapplication.NewDataHcpWaypointApplication(scope Construct, id *string, config DataHcpWaypointApplicationConfig) DataHcpWaypointApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig">DataHcpWaypointApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig">DataHcpWaypointApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetName"></a>

```go
func ResetName()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.resetProjectId"></a>

```go
func ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpWaypointApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointapplication"

datahcpwaypointapplication.DataHcpWaypointApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointapplication"

datahcpwaypointapplication.DataHcpWaypointApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointapplication"

datahcpwaypointapplication.DataHcpWaypointApplication_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointapplication"

datahcpwaypointapplication.DataHcpWaypointApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataHcpWaypointApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataHcpWaypointApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataHcpWaypointApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/waypoint_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpWaypointApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.applicationTemplateId">ApplicationTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.applicationTemplateName">ApplicationTemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.readmeMarkdown">ReadmeMarkdown</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApplicationTemplateId`<sup>Required</sup> <a name="ApplicationTemplateId" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.applicationTemplateId"></a>

```go
func ApplicationTemplateId() *string
```

- *Type:* *string

---

##### `ApplicationTemplateName`<sup>Required</sup> <a name="ApplicationTemplateName" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.applicationTemplateName"></a>

```go
func ApplicationTemplateName() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ReadmeMarkdown`<sup>Required</sup> <a name="ReadmeMarkdown" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.readmeMarkdown"></a>

```go
func ReadmeMarkdown() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpWaypointApplicationConfig <a name="DataHcpWaypointApplicationConfig" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/datahcpwaypointapplication"

&datahcpwaypointapplication.DataHcpWaypointApplicationConfig {
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
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.id">Id</a></code> | <code>*string</code> | The ID of the Application. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Application. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where the Waypoint Application is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/waypoint_application#id DataHcpWaypointApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/waypoint_application#name DataHcpWaypointApplication#name}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpWaypointApplication.DataHcpWaypointApplicationConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where the Waypoint Application is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/waypoint_application#project_id DataHcpWaypointApplication#project_id}

---



