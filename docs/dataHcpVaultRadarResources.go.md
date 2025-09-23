# `dataHcpVaultRadarResources` Submodule <a name="`dataHcpVaultRadarResources` Submodule" id="@cdktf/provider-hcp.dataHcpVaultRadarResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpVaultRadarResources <a name="DataHcpVaultRadarResources" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources hcp_vault_radar_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/datahcpvaultradarresources"

datahcpvaultradarresources.NewDataHcpVaultRadarResources(scope Construct, id *string, config DataHcpVaultRadarResourcesConfig) DataHcpVaultRadarResources
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig">DataHcpVaultRadarResourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig">DataHcpVaultRadarResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.putUriLikeFilter">PutUriLikeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutUriLikeFilter` <a name="PutUriLikeFilter" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.putUriLikeFilter"></a>

```go
func PutUriLikeFilter(value DataHcpVaultRadarResourcesUriLikeFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.putUriLikeFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a>

---

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.resetProjectId"></a>

```go
func ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpVaultRadarResources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/datahcpvaultradarresources"

datahcpvaultradarresources.DataHcpVaultRadarResources_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/datahcpvaultradarresources"

datahcpvaultradarresources.DataHcpVaultRadarResources_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/datahcpvaultradarresources"

datahcpvaultradarresources.DataHcpVaultRadarResources_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/datahcpvaultradarresources"

datahcpvaultradarresources.DataHcpVaultRadarResources_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataHcpVaultRadarResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataHcpVaultRadarResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataHcpVaultRadarResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpVaultRadarResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList">DataHcpVaultRadarResourcesResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.uriLikeFilter">UriLikeFilter</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference">DataHcpVaultRadarResourcesUriLikeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.uriLikeFilterInput">UriLikeFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.resources"></a>

```go
func Resources() DataHcpVaultRadarResourcesResourcesList
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList">DataHcpVaultRadarResourcesResourcesList</a>

---

##### `UriLikeFilter`<sup>Required</sup> <a name="UriLikeFilter" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.uriLikeFilter"></a>

```go
func UriLikeFilter() DataHcpVaultRadarResourcesUriLikeFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference">DataHcpVaultRadarResourcesUriLikeFilterOutputReference</a>

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `UriLikeFilterInput`<sup>Optional</sup> <a name="UriLikeFilterInput" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.uriLikeFilterInput"></a>

```go
func UriLikeFilterInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpVaultRadarResourcesConfig <a name="DataHcpVaultRadarResourcesConfig" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/datahcpvaultradarresources"

&datahcpvaultradarresources.DataHcpVaultRadarResourcesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	UriLikeFilter: github.com/cdktf/cdktf-provider-hcp-go/hcp/v10.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.uriLikeFilter">UriLikeFilter</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a></code> | Applies a filter to the radar resources based on their URIs. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UriLikeFilter`<sup>Required</sup> <a name="UriLikeFilter" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.uriLikeFilter"></a>

```go
UriLikeFilter DataHcpVaultRadarResourcesUriLikeFilter
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a>

Applies a filter to the radar resources based on their URIs.

The filter uses the SQL LIKE operator, which allows for wildcard matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources#uri_like_filter DataHcpVaultRadarResources#uri_like_filter}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources#project_id DataHcpVaultRadarResources#project_id}

---

### DataHcpVaultRadarResourcesResources <a name="DataHcpVaultRadarResourcesResources" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/datahcpvaultradarresources"

&datahcpvaultradarresources.DataHcpVaultRadarResourcesResources {

}
```


### DataHcpVaultRadarResourcesUriLikeFilter <a name="DataHcpVaultRadarResourcesUriLikeFilter" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/datahcpvaultradarresources"

&datahcpvaultradarresources.DataHcpVaultRadarResourcesUriLikeFilter {
	Values: *[]*string,
	CaseInsensitive: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.property.values">Values</a></code> | <code>*[]*string</code> | URI like filters to apply radar resources. Each entry in the list will act like an or condition. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.property.caseInsensitive">CaseInsensitive</a></code> | <code>interface{}</code> | If true, the uri like filter will be case insensitive. Defaults to false. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

URI like filters to apply radar resources. Each entry in the list will act like an or condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources#values DataHcpVaultRadarResources#values}

---

##### `CaseInsensitive`<sup>Optional</sup> <a name="CaseInsensitive" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.property.caseInsensitive"></a>

```go
CaseInsensitive interface{}
```

- *Type:* interface{}

If true, the uri like filter will be case insensitive. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources#case_insensitive DataHcpVaultRadarResources#case_insensitive}

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpVaultRadarResourcesResourcesList <a name="DataHcpVaultRadarResourcesResourcesList" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/datahcpvaultradarresources"

datahcpvaultradarresources.NewDataHcpVaultRadarResourcesResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataHcpVaultRadarResourcesResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.get"></a>

```go
func Get(index *f64) DataHcpVaultRadarResourcesResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataHcpVaultRadarResourcesResourcesOutputReference <a name="DataHcpVaultRadarResourcesResourcesOutputReference" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/datahcpvaultradarresources"

datahcpvaultradarresources.NewDataHcpVaultRadarResourcesResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataHcpVaultRadarResourcesResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceInfo">DataSourceInfo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceName">DataSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceType">DataSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.detectorType">DetectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceId">HcpResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceName">HcpResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceStatus">HcpResourceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResources">DataHcpVaultRadarResourcesResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `DataSourceInfo`<sup>Required</sup> <a name="DataSourceInfo" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceInfo"></a>

```go
func DataSourceInfo() *string
```

- *Type:* *string

---

##### `DataSourceName`<sup>Required</sup> <a name="DataSourceName" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceName"></a>

```go
func DataSourceName() *string
```

- *Type:* *string

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceType"></a>

```go
func DataSourceType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DetectorType`<sup>Required</sup> <a name="DetectorType" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.detectorType"></a>

```go
func DetectorType() *string
```

- *Type:* *string

---

##### `HcpResourceId`<sup>Required</sup> <a name="HcpResourceId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceId"></a>

```go
func HcpResourceId() *string
```

- *Type:* *string

---

##### `HcpResourceName`<sup>Required</sup> <a name="HcpResourceName" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceName"></a>

```go
func HcpResourceName() *string
```

- *Type:* *string

---

##### `HcpResourceStatus`<sup>Required</sup> <a name="HcpResourceStatus" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceStatus"></a>

```go
func HcpResourceStatus() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataHcpVaultRadarResourcesResources
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResources">DataHcpVaultRadarResourcesResources</a>

---


### DataHcpVaultRadarResourcesUriLikeFilterOutputReference <a name="DataHcpVaultRadarResourcesUriLikeFilterOutputReference" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/datahcpvaultradarresources"

datahcpvaultradarresources.NewDataHcpVaultRadarResourcesUriLikeFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHcpVaultRadarResourcesUriLikeFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.resetCaseInsensitive">ResetCaseInsensitive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaseInsensitive` <a name="ResetCaseInsensitive" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.resetCaseInsensitive"></a>

```go
func ResetCaseInsensitive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.caseInsensitiveInput">CaseInsensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.caseInsensitive">CaseInsensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaseInsensitiveInput`<sup>Optional</sup> <a name="CaseInsensitiveInput" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.caseInsensitiveInput"></a>

```go
func CaseInsensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CaseInsensitive`<sup>Required</sup> <a name="CaseInsensitive" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.caseInsensitive"></a>

```go
func CaseInsensitive() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



