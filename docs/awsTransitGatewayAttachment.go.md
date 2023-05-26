# `hcp_aws_transit_gateway_attachment`

Refer to the Terraform Registory for docs: [`hcp_aws_transit_gateway_attachment`](https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment).

# `awsTransitGatewayAttachment` Submodule <a name="`awsTransitGatewayAttachment` Submodule" id="@cdktf/provider-hcp.awsTransitGatewayAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsTransitGatewayAttachment <a name="AwsTransitGatewayAttachment" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment hcp_aws_transit_gateway_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/awstransitgatewayattachment"

awstransitgatewayattachment.NewAwsTransitGatewayAttachment(scope Construct, id *string, config AwsTransitGatewayAttachmentConfig) AwsTransitGatewayAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig">AwsTransitGatewayAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig">AwsTransitGatewayAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.putTimeouts"></a>

```go
func PutTimeouts(value AwsTransitGatewayAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/awstransitgatewayattachment"

awstransitgatewayattachment.AwsTransitGatewayAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/awstransitgatewayattachment"

awstransitgatewayattachment.AwsTransitGatewayAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/awstransitgatewayattachment"

awstransitgatewayattachment.AwsTransitGatewayAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.providerTransitGatewayAttachmentId">ProviderTransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference">AwsTransitGatewayAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnIdInput">HvnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArnInput">ResourceShareArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentIdInput">TransitGatewayAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnId">HvnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArn">ResourceShareArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ProviderTransitGatewayAttachmentId`<sup>Required</sup> <a name="ProviderTransitGatewayAttachmentId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.providerTransitGatewayAttachmentId"></a>

```go
func ProviderTransitGatewayAttachmentId() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeouts"></a>

```go
func Timeouts() AwsTransitGatewayAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference">AwsTransitGatewayAttachmentTimeoutsOutputReference</a>

---

##### `HvnIdInput`<sup>Optional</sup> <a name="HvnIdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnIdInput"></a>

```go
func HvnIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ResourceShareArnInput`<sup>Optional</sup> <a name="ResourceShareArnInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArnInput"></a>

```go
func ResourceShareArnInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransitGatewayAttachmentIdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentIdInput"></a>

```go
func TransitGatewayAttachmentIdInput() *string
```

- *Type:* *string

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayIdInput"></a>

```go
func TransitGatewayIdInput() *string
```

- *Type:* *string

---

##### `HvnId`<sup>Required</sup> <a name="HvnId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnId"></a>

```go
func HvnId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ResourceShareArn`<sup>Required</sup> <a name="ResourceShareArn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArn"></a>

```go
func ResourceShareArn() *string
```

- *Type:* *string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentId"></a>

```go
func TransitGatewayAttachmentId() *string
```

- *Type:* *string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayId"></a>

```go
func TransitGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsTransitGatewayAttachmentConfig <a name="AwsTransitGatewayAttachmentConfig" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/awstransitgatewayattachment"

&awstransitgatewayattachment.AwsTransitGatewayAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HvnId: *string,
	ResourceShareArn: *string,
	TransitGatewayAttachmentId: *string,
	TransitGatewayId: *string,
	Id: *string,
	ProjectId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-hcp-go/hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.hvnId">HvnId</a></code> | <code>*string</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.resourceShareArn">ResourceShareArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Resource Share that is needed to grant HCP access to the transit gateway in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | The user-settable name of the transit gateway attachment in HCP. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | The ID of the user-owned transit gateway in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#id AwsTransitGatewayAttachment#id}. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where the transit gateway attachment is located. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HvnId`<sup>Required</sup> <a name="HvnId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.hvnId"></a>

```go
HvnId *string
```

- *Type:* *string

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#hvn_id AwsTransitGatewayAttachment#hvn_id}

---

##### `ResourceShareArn`<sup>Required</sup> <a name="ResourceShareArn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.resourceShareArn"></a>

```go
ResourceShareArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Resource Share that is needed to grant HCP access to the transit gateway in AWS.

The Resource Share should be associated with the HCP AWS account principal (see [aws_ram_principal_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ram_principal_association)) and the transit gateway resource (see [aws_ram_resource_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ram_resource_association))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#resource_share_arn AwsTransitGatewayAttachment#resource_share_arn}

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayAttachmentId"></a>

```go
TransitGatewayAttachmentId *string
```

- *Type:* *string

The user-settable name of the transit gateway attachment in HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#transit_gateway_attachment_id AwsTransitGatewayAttachment#transit_gateway_attachment_id}

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayId"></a>

```go
TransitGatewayId *string
```

- *Type:* *string

The ID of the user-owned transit gateway in AWS.

The AWS region of the transit gateway must match the HVN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#transit_gateway_id AwsTransitGatewayAttachment#transit_gateway_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#id AwsTransitGatewayAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where the transit gateway attachment is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#project_id AwsTransitGatewayAttachment#project_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.timeouts"></a>

```go
Timeouts AwsTransitGatewayAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#timeouts AwsTransitGatewayAttachment#timeouts}

---

### AwsTransitGatewayAttachmentTimeouts <a name="AwsTransitGatewayAttachmentTimeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/awstransitgatewayattachment"

&awstransitgatewayattachment.AwsTransitGatewayAttachmentTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#create AwsTransitGatewayAttachment#create}. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#default AwsTransitGatewayAttachment#default}. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#delete AwsTransitGatewayAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#create AwsTransitGatewayAttachment#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#default AwsTransitGatewayAttachment#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/aws_transit_gateway_attachment#delete AwsTransitGatewayAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AwsTransitGatewayAttachmentTimeoutsOutputReference <a name="AwsTransitGatewayAttachmentTimeoutsOutputReference" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/awstransitgatewayattachment"

awstransitgatewayattachment.NewAwsTransitGatewayAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AwsTransitGatewayAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



