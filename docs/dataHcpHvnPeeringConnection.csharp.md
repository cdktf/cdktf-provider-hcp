# `data_hcp_hvn_peering_connection`

Refer to the Terraform Registory for docs: [`data_hcp_hvn_peering_connection`](https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn_peering_connection).

# `dataHcpHvnPeeringConnection` Submodule <a name="`dataHcpHvnPeeringConnection` Submodule" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpHvnPeeringConnection <a name="DataHcpHvnPeeringConnection" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn_peering_connection hcp_hvn_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpHvnPeeringConnection(Construct Scope, string Id, DataHcpHvnPeeringConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig">DataHcpHvnPeeringConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig">DataHcpHvnPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(DataHcpHvnPeeringConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts">DataHcpHvnPeeringConnectionTimeouts</a>

---

##### `ResetHvn2` <a name="ResetHvn2" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetHvn2"></a>

```csharp
private void ResetHvn2()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpHvnPeeringConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpHvnPeeringConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpHvnPeeringConnection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference">DataHcpHvnPeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn1Input">Hvn1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn2Input">Hvn2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.peeringIdInput">PeeringIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn1">Hvn1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn2">Hvn2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.peeringId">PeeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.timeouts"></a>

```csharp
public DataHcpHvnPeeringConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference">DataHcpHvnPeeringConnectionTimeoutsOutputReference</a>

---

##### `Hvn1Input`<sup>Optional</sup> <a name="Hvn1Input" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn1Input"></a>

```csharp
public string Hvn1Input { get; }
```

- *Type:* string

---

##### `Hvn2Input`<sup>Optional</sup> <a name="Hvn2Input" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn2Input"></a>

```csharp
public string Hvn2Input { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PeeringIdInput`<sup>Optional</sup> <a name="PeeringIdInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.peeringIdInput"></a>

```csharp
public string PeeringIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Hvn1`<sup>Required</sup> <a name="Hvn1" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn1"></a>

```csharp
public string Hvn1 { get; }
```

- *Type:* string

---

##### `Hvn2`<sup>Required</sup> <a name="Hvn2" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.hvn2"></a>

```csharp
public string Hvn2 { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PeeringId`<sup>Required</sup> <a name="PeeringId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.peeringId"></a>

```csharp
public string PeeringId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpHvnPeeringConnectionConfig <a name="DataHcpHvnPeeringConnectionConfig" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpHvnPeeringConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Hvn1,
    string PeeringId,
    string Hvn2 = null,
    string Id = null,
    string ProjectId = null,
    DataHcpHvnPeeringConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.hvn1">Hvn1</a></code> | <code>string</code> | The unique URL of one of the HVNs being peered. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.peeringId">PeeringId</a></code> | <code>string</code> | The ID of the peering connection. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.hvn2">Hvn2</a></code> | <code>string</code> | The unique URL of one of the HVNs being peered. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn_peering_connection#id DataHcpHvnPeeringConnection#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where the HVN peering connection is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts">DataHcpHvnPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Hvn1`<sup>Required</sup> <a name="Hvn1" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.hvn1"></a>

```csharp
public string Hvn1 { get; set; }
```

- *Type:* string

The unique URL of one of the HVNs being peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn_peering_connection#hvn_1 DataHcpHvnPeeringConnection#hvn_1}

---

##### `PeeringId`<sup>Required</sup> <a name="PeeringId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.peeringId"></a>

```csharp
public string PeeringId { get; set; }
```

- *Type:* string

The ID of the peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn_peering_connection#peering_id DataHcpHvnPeeringConnection#peering_id}

---

##### `Hvn2`<sup>Optional</sup> <a name="Hvn2" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.hvn2"></a>

```csharp
public string Hvn2 { get; set; }
```

- *Type:* string

The unique URL of one of the HVNs being peered.

Setting this attribute is deprecated, but it will remain usable in read-only form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn_peering_connection#hvn_2 DataHcpHvnPeeringConnection#hvn_2}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn_peering_connection#id DataHcpHvnPeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where the HVN peering connection is located.

Always matches hvn_1's project ID. Setting this attribute is deprecated, but it will remain usable in read-only form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn_peering_connection#project_id DataHcpHvnPeeringConnection#project_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionConfig.property.timeouts"></a>

```csharp
public DataHcpHvnPeeringConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts">DataHcpHvnPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn_peering_connection#timeouts DataHcpHvnPeeringConnection#timeouts}

---

### DataHcpHvnPeeringConnectionTimeouts <a name="DataHcpHvnPeeringConnectionTimeouts" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpHvnPeeringConnectionTimeouts {
    string Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn_peering_connection#default DataHcpHvnPeeringConnection#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn_peering_connection#default DataHcpHvnPeeringConnection#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpHvnPeeringConnectionTimeoutsOutputReference <a name="DataHcpHvnPeeringConnectionTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpHvnPeeringConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpHvnPeeringConnection.DataHcpHvnPeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



