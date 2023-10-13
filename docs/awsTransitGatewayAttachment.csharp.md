# `hcp_aws_transit_gateway_attachment`

Refer to the Terraform Registory for docs: [`hcp_aws_transit_gateway_attachment`](https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment).

# `awsTransitGatewayAttachment` Submodule <a name="`awsTransitGatewayAttachment` Submodule" id="@cdktf/provider-hcp.awsTransitGatewayAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsTransitGatewayAttachment <a name="AwsTransitGatewayAttachment" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment hcp_aws_transit_gateway_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new AwsTransitGatewayAttachment(Construct Scope, string Id, AwsTransitGatewayAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig">AwsTransitGatewayAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(AwsTransitGatewayAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

AwsTransitGatewayAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

AwsTransitGatewayAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

AwsTransitGatewayAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.providerTransitGatewayAttachmentId">ProviderTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference">AwsTransitGatewayAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnIdInput">HvnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArnInput">ResourceShareArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentIdInput">TransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnId">HvnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArn">ResourceShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `ProviderTransitGatewayAttachmentId`<sup>Required</sup> <a name="ProviderTransitGatewayAttachmentId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.providerTransitGatewayAttachmentId"></a>

```csharp
public string ProviderTransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeouts"></a>

```csharp
public AwsTransitGatewayAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference">AwsTransitGatewayAttachmentTimeoutsOutputReference</a>

---

##### `HvnIdInput`<sup>Optional</sup> <a name="HvnIdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnIdInput"></a>

```csharp
public string HvnIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ResourceShareArnInput`<sup>Optional</sup> <a name="ResourceShareArnInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArnInput"></a>

```csharp
public string ResourceShareArnInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransitGatewayAttachmentIdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentIdInput"></a>

```csharp
public string TransitGatewayAttachmentIdInput { get; }
```

- *Type:* string

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `HvnId`<sup>Required</sup> <a name="HvnId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.hvnId"></a>

```csharp
public string HvnId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ResourceShareArn`<sup>Required</sup> <a name="ResourceShareArn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.resourceShareArn"></a>

```csharp
public string ResourceShareArn { get; }
```

- *Type:* string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsTransitGatewayAttachmentConfig <a name="AwsTransitGatewayAttachmentConfig" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new AwsTransitGatewayAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string HvnId,
    string ResourceShareArn,
    string TransitGatewayAttachmentId,
    string TransitGatewayId,
    string Id = null,
    string ProjectId = null,
    AwsTransitGatewayAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.hvnId">HvnId</a></code> | <code>string</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.resourceShareArn">ResourceShareArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Resource Share that is needed to grant HCP access to the transit gateway in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | The user-settable name of the transit gateway attachment in HCP. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | The ID of the user-owned transit gateway in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#id AwsTransitGatewayAttachment#id}. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where the transit gateway attachment is located."  If not specified, the project specified in the HCP Provider config block will be used, if configured. If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HvnId`<sup>Required</sup> <a name="HvnId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.hvnId"></a>

```csharp
public string HvnId { get; set; }
```

- *Type:* string

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#hvn_id AwsTransitGatewayAttachment#hvn_id}

---

##### `ResourceShareArn`<sup>Required</sup> <a name="ResourceShareArn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.resourceShareArn"></a>

```csharp
public string ResourceShareArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Resource Share that is needed to grant HCP access to the transit gateway in AWS.

The Resource Share should be associated with the HCP AWS account principal (see [aws_ram_principal_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ram_principal_association)) and the transit gateway resource (see [aws_ram_resource_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ram_resource_association))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#resource_share_arn AwsTransitGatewayAttachment#resource_share_arn}

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; set; }
```

- *Type:* string

The user-settable name of the transit gateway attachment in HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#transit_gateway_attachment_id AwsTransitGatewayAttachment#transit_gateway_attachment_id}

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

The ID of the user-owned transit gateway in AWS.

The AWS region of the transit gateway must match the HVN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#transit_gateway_id AwsTransitGatewayAttachment#transit_gateway_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#id AwsTransitGatewayAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where the transit gateway attachment is located."  If not specified, the project specified in the HCP Provider config block will be used, if configured. If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#project_id AwsTransitGatewayAttachment#project_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentConfig.property.timeouts"></a>

```csharp
public AwsTransitGatewayAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts">AwsTransitGatewayAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#timeouts AwsTransitGatewayAttachment#timeouts}

---

### AwsTransitGatewayAttachmentTimeouts <a name="AwsTransitGatewayAttachmentTimeouts" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new AwsTransitGatewayAttachmentTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#create AwsTransitGatewayAttachment#create}. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#default AwsTransitGatewayAttachment#default}. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#delete AwsTransitGatewayAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#create AwsTransitGatewayAttachment#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#default AwsTransitGatewayAttachment#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.73.0/docs/resources/aws_transit_gateway_attachment#delete AwsTransitGatewayAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AwsTransitGatewayAttachmentTimeoutsOutputReference <a name="AwsTransitGatewayAttachmentTimeoutsOutputReference" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new AwsTransitGatewayAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.awsTransitGatewayAttachment.AwsTransitGatewayAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



