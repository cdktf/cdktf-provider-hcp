# `hcp_packer_channel_assignment`

Refer to the Terraform Registory for docs: [`hcp_packer_channel_assignment`](https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment).

# `packerChannelAssignment` Submodule <a name="`packerChannelAssignment` Submodule" id="@cdktf/provider-hcp.packerChannelAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PackerChannelAssignment <a name="PackerChannelAssignment" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment hcp_packer_channel_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/packerchannelassignment"

packerchannelassignment.NewPackerChannelAssignment(scope Construct, id *string, config PackerChannelAssignmentConfig) PackerChannelAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig">PackerChannelAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig">PackerChannelAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationFingerprint">ResetIterationFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationId">ResetIterationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationVersion">ResetIterationVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.putTimeouts"></a>

```go
func PutTimeouts(value PackerChannelAssignmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetId"></a>

```go
func ResetId()
```

##### `ResetIterationFingerprint` <a name="ResetIterationFingerprint" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationFingerprint"></a>

```go
func ResetIterationFingerprint()
```

##### `ResetIterationId` <a name="ResetIterationId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationId"></a>

```go
func ResetIterationId()
```

##### `ResetIterationVersion` <a name="ResetIterationVersion" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationVersion"></a>

```go
func ResetIterationVersion()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/packerchannelassignment"

packerchannelassignment.PackerChannelAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/packerchannelassignment"

packerchannelassignment.PackerChannelAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/packerchannelassignment"

packerchannelassignment.PackerChannelAssignment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference">PackerChannelAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationFingerprintInput">IterationFingerprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationIdInput">IterationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationVersionInput">IterationVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationFingerprint">IterationFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationId">IterationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationVersion">IterationVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.timeouts"></a>

```go
func Timeouts() PackerChannelAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference">PackerChannelAssignmentTimeoutsOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IterationFingerprintInput`<sup>Optional</sup> <a name="IterationFingerprintInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationFingerprintInput"></a>

```go
func IterationFingerprintInput() *string
```

- *Type:* *string

---

##### `IterationIdInput`<sup>Optional</sup> <a name="IterationIdInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationIdInput"></a>

```go
func IterationIdInput() *string
```

- *Type:* *string

---

##### `IterationVersionInput`<sup>Optional</sup> <a name="IterationVersionInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationVersionInput"></a>

```go
func IterationVersionInput() *f64
```

- *Type:* *f64

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IterationFingerprint`<sup>Required</sup> <a name="IterationFingerprint" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationFingerprint"></a>

```go
func IterationFingerprint() *string
```

- *Type:* *string

---

##### `IterationId`<sup>Required</sup> <a name="IterationId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationId"></a>

```go
func IterationId() *string
```

- *Type:* *string

---

##### `IterationVersion`<sup>Required</sup> <a name="IterationVersion" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationVersion"></a>

```go
func IterationVersion() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PackerChannelAssignmentConfig <a name="PackerChannelAssignmentConfig" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/packerchannelassignment"

&packerchannelassignment.PackerChannelAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BucketName: *string,
	ChannelName: *string,
	Id: *string,
	IterationFingerprint: *string,
	IterationId: *string,
	IterationVersion: *f64,
	ProjectId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-hcp-go/hcp/v7.packerChannelAssignment.PackerChannelAssignmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | The slug of the HCP Packer Registry bucket where the channel is located. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | The name of the HCP Packer channel being managed. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#id PackerChannelAssignment#id}. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationFingerprint">IterationFingerprint</a></code> | <code>*string</code> | The fingerprint of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationId">IterationId</a></code> | <code>*string</code> | The ID of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationVersion">IterationVersion</a></code> | <code>*f64</code> | The incremental version of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where the channel is located. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The slug of the HCP Packer Registry bucket where the channel is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#bucket_name PackerChannelAssignment#bucket_name}

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

The name of the HCP Packer channel being managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#channel_name PackerChannelAssignment#channel_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#id PackerChannelAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IterationFingerprint`<sup>Optional</sup> <a name="IterationFingerprint" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationFingerprint"></a>

```go
IterationFingerprint *string
```

- *Type:* *string

The fingerprint of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#iteration_fingerprint PackerChannelAssignment#iteration_fingerprint}

---

##### `IterationId`<sup>Optional</sup> <a name="IterationId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationId"></a>

```go
IterationId *string
```

- *Type:* *string

The ID of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#iteration_id PackerChannelAssignment#iteration_id}

---

##### `IterationVersion`<sup>Optional</sup> <a name="IterationVersion" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationVersion"></a>

```go
IterationVersion *f64
```

- *Type:* *f64

The incremental version of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#iteration_version PackerChannelAssignment#iteration_version}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where the channel is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#project_id PackerChannelAssignment#project_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.timeouts"></a>

```go
Timeouts PackerChannelAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#timeouts PackerChannelAssignment#timeouts}

---

### PackerChannelAssignmentTimeouts <a name="PackerChannelAssignmentTimeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/packerchannelassignment"

&packerchannelassignment.PackerChannelAssignmentTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#create PackerChannelAssignment#create}. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#default PackerChannelAssignment#default}. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#delete PackerChannelAssignment#delete}. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#update PackerChannelAssignment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#create PackerChannelAssignment#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#default PackerChannelAssignment#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#delete PackerChannelAssignment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.1/docs/resources/packer_channel_assignment#update PackerChannelAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PackerChannelAssignmentTimeoutsOutputReference <a name="PackerChannelAssignmentTimeoutsOutputReference" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v7/packerchannelassignment"

packerchannelassignment.NewPackerChannelAssignmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PackerChannelAssignmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



