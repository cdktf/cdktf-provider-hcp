# `data_hcp_packer_image_iteration`

Refer to the Terraform Registory for docs: [`data_hcp_packer_image_iteration`](https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/packer_image_iteration).

# `dataHcpPackerImageIteration` Submodule <a name="`dataHcpPackerImageIteration` Submodule" id="@cdktf/provider-hcp.dataHcpPackerImageIteration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpPackerImageIteration <a name="DataHcpPackerImageIteration" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/packer_image_iteration hcp_packer_image_iteration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/datahcppackerimageiteration"

datahcppackerimageiteration.NewDataHcpPackerImageIteration(scope Construct, id *string, config DataHcpPackerImageIterationConfig) DataHcpPackerImageIteration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig">DataHcpPackerImageIterationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig">DataHcpPackerImageIterationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.putTimeouts"></a>

```go
func PutTimeouts(value DataHcpPackerImageIterationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts">DataHcpPackerImageIterationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetId"></a>

```go
func ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/datahcppackerimageiteration"

datahcppackerimageiteration.DataHcpPackerImageIteration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/datahcppackerimageiteration"

datahcppackerimageiteration.DataHcpPackerImageIteration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/datahcppackerimageiteration"

datahcppackerimageiteration.DataHcpPackerImageIteration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.builds">Builds</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList">DataHcpPackerImageIterationBuildsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.incrementalVersion">IncrementalVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.revokeAt">RevokeAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference">DataHcpPackerImageIterationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Builds`<sup>Required</sup> <a name="Builds" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.builds"></a>

```go
func Builds() DataHcpPackerImageIterationBuildsList
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList">DataHcpPackerImageIterationBuildsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `IncrementalVersion`<sup>Required</sup> <a name="IncrementalVersion" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.incrementalVersion"></a>

```go
func IncrementalVersion() *f64
```

- *Type:* *f64

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `RevokeAt`<sup>Required</sup> <a name="RevokeAt" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.revokeAt"></a>

```go
func RevokeAt() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.timeouts"></a>

```go
func Timeouts() DataHcpPackerImageIterationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference">DataHcpPackerImageIterationTimeoutsOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpPackerImageIterationBuilds <a name="DataHcpPackerImageIterationBuilds" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuilds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuilds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/datahcppackerimageiteration"

&datahcppackerimageiteration.DataHcpPackerImageIterationBuilds {

}
```


### DataHcpPackerImageIterationBuildsImages <a name="DataHcpPackerImageIterationBuildsImages" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/datahcppackerimageiteration"

&datahcppackerimageiteration.DataHcpPackerImageIterationBuildsImages {

}
```


### DataHcpPackerImageIterationConfig <a name="DataHcpPackerImageIterationConfig" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/datahcppackerimageiteration"

&datahcppackerimageiteration.DataHcpPackerImageIterationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BucketName: *string,
	Channel: *string,
	Id: *string,
	ProjectId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-hcp-go/hcp/v7.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | The slug of the HCP Packer Registry bucket to pull from. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.channel">Channel</a></code> | <code>*string</code> | The channel that points to the version of the image you want. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/packer_image_iteration#id DataHcpPackerImageIteration#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where the HCP Packer registry is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts">DataHcpPackerImageIterationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The slug of the HCP Packer Registry bucket to pull from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/packer_image_iteration#bucket_name DataHcpPackerImageIteration#bucket_name}

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

The channel that points to the version of the image you want.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/packer_image_iteration#channel DataHcpPackerImageIteration#channel}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/packer_image_iteration#id DataHcpPackerImageIteration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where the HCP Packer registry is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/packer_image_iteration#project_id DataHcpPackerImageIteration#project_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.timeouts"></a>

```go
Timeouts DataHcpPackerImageIterationTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts">DataHcpPackerImageIterationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/packer_image_iteration#timeouts DataHcpPackerImageIteration#timeouts}

---

### DataHcpPackerImageIterationTimeouts <a name="DataHcpPackerImageIterationTimeouts" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/datahcppackerimageiteration"

&datahcppackerimageiteration.DataHcpPackerImageIterationTimeouts {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/packer_image_iteration#default DataHcpPackerImageIteration#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/packer_image_iteration#default DataHcpPackerImageIteration#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpPackerImageIterationBuildsImagesList <a name="DataHcpPackerImageIterationBuildsImagesList" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/datahcppackerimageiteration"

datahcppackerimageiteration.NewDataHcpPackerImageIterationBuildsImagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataHcpPackerImageIterationBuildsImagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.get"></a>

```go
func Get(index *f64) DataHcpPackerImageIterationBuildsImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataHcpPackerImageIterationBuildsImagesOutputReference <a name="DataHcpPackerImageIterationBuildsImagesOutputReference" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/datahcppackerimageiteration"

datahcppackerimageiteration.NewDataHcpPackerImageIterationBuildsImagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataHcpPackerImageIterationBuildsImagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImages">DataHcpPackerImageIterationBuildsImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataHcpPackerImageIterationBuildsImages
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImages">DataHcpPackerImageIterationBuildsImages</a>

---


### DataHcpPackerImageIterationBuildsList <a name="DataHcpPackerImageIterationBuildsList" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/datahcppackerimageiteration"

datahcppackerimageiteration.NewDataHcpPackerImageIterationBuildsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataHcpPackerImageIterationBuildsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.get"></a>

```go
func Get(index *f64) DataHcpPackerImageIterationBuildsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataHcpPackerImageIterationBuildsOutputReference <a name="DataHcpPackerImageIterationBuildsOutputReference" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/datahcppackerimageiteration"

datahcppackerimageiteration.NewDataHcpPackerImageIterationBuildsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataHcpPackerImageIterationBuildsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.componentType">ComponentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.images">Images</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList">DataHcpPackerImageIterationBuildsImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.packerRunUuid">PackerRunUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuilds">DataHcpPackerImageIterationBuilds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.cloudProvider"></a>

```go
func CloudProvider() *string
```

- *Type:* *string

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.componentType"></a>

```go
func ComponentType() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Images`<sup>Required</sup> <a name="Images" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.images"></a>

```go
func Images() DataHcpPackerImageIterationBuildsImagesList
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList">DataHcpPackerImageIterationBuildsImagesList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `PackerRunUuid`<sup>Required</sup> <a name="PackerRunUuid" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.packerRunUuid"></a>

```go
func PackerRunUuid() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataHcpPackerImageIterationBuilds
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuilds">DataHcpPackerImageIterationBuilds</a>

---


### DataHcpPackerImageIterationTimeoutsOutputReference <a name="DataHcpPackerImageIterationTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/datahcppackerimageiteration"

datahcppackerimageiteration.NewDataHcpPackerImageIterationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHcpPackerImageIterationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



