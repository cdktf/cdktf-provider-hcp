# `data_hcp_azure_peering_connection`

Refer to the Terraform Registory for docs: [`data_hcp_azure_peering_connection`](https://registry.terraform.io/providers/hashicorp/hcp/0.76.0/docs/data-sources/azure_peering_connection).

# `dataHcpAzurePeeringConnection` Submodule <a name="`dataHcpAzurePeeringConnection` Submodule" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpAzurePeeringConnection <a name="DataHcpAzurePeeringConnection" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.76.0/docs/data-sources/azure_peering_connection hcp_azure_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpAzurePeeringConnection(Construct Scope, string Id, DataHcpAzurePeeringConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig">DataHcpAzurePeeringConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig">DataHcpAzurePeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetWaitForActiveState">ResetWaitForActiveState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(DataHcpAzurePeeringConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts">DataHcpAzurePeeringConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWaitForActiveState` <a name="ResetWaitForActiveState" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.resetWaitForActiveState"></a>

```csharp
private void ResetWaitForActiveState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpAzurePeeringConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpAzurePeeringConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpAzurePeeringConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpAzurePeeringConnection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpAzurePeeringConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataHcpAzurePeeringConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpAzurePeeringConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpAzurePeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.76.0/docs/data-sources/azure_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpAzurePeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.azurePeeringId">AzurePeeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerResourceGroupName">PeerResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerSubscriptionId">PeerSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerTenantId">PeerTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerVnetName">PeerVnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerVnetRegion">PeerVnetRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference">DataHcpAzurePeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.hvnLinkInput">HvnLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peeringIdInput">PeeringIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.waitForActiveStateInput">WaitForActiveStateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.hvnLink">HvnLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peeringId">PeeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.waitForActiveState">WaitForActiveState</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `AzurePeeringId`<sup>Required</sup> <a name="AzurePeeringId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.azurePeeringId"></a>

```csharp
public string AzurePeeringId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `PeerResourceGroupName`<sup>Required</sup> <a name="PeerResourceGroupName" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerResourceGroupName"></a>

```csharp
public string PeerResourceGroupName { get; }
```

- *Type:* string

---

##### `PeerSubscriptionId`<sup>Required</sup> <a name="PeerSubscriptionId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerSubscriptionId"></a>

```csharp
public string PeerSubscriptionId { get; }
```

- *Type:* string

---

##### `PeerTenantId`<sup>Required</sup> <a name="PeerTenantId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerTenantId"></a>

```csharp
public string PeerTenantId { get; }
```

- *Type:* string

---

##### `PeerVnetName`<sup>Required</sup> <a name="PeerVnetName" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerVnetName"></a>

```csharp
public string PeerVnetName { get; }
```

- *Type:* string

---

##### `PeerVnetRegion`<sup>Required</sup> <a name="PeerVnetRegion" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peerVnetRegion"></a>

```csharp
public string PeerVnetRegion { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.timeouts"></a>

```csharp
public DataHcpAzurePeeringConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference">DataHcpAzurePeeringConnectionTimeoutsOutputReference</a>

---

##### `HvnLinkInput`<sup>Optional</sup> <a name="HvnLinkInput" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.hvnLinkInput"></a>

```csharp
public string HvnLinkInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PeeringIdInput`<sup>Optional</sup> <a name="PeeringIdInput" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peeringIdInput"></a>

```csharp
public string PeeringIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WaitForActiveStateInput`<sup>Optional</sup> <a name="WaitForActiveStateInput" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.waitForActiveStateInput"></a>

```csharp
public object WaitForActiveStateInput { get; }
```

- *Type:* object

---

##### `HvnLink`<sup>Required</sup> <a name="HvnLink" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.hvnLink"></a>

```csharp
public string HvnLink { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PeeringId`<sup>Required</sup> <a name="PeeringId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.peeringId"></a>

```csharp
public string PeeringId { get; }
```

- *Type:* string

---

##### `WaitForActiveState`<sup>Required</sup> <a name="WaitForActiveState" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.waitForActiveState"></a>

```csharp
public object WaitForActiveState { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpAzurePeeringConnectionConfig <a name="DataHcpAzurePeeringConnectionConfig" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpAzurePeeringConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string HvnLink,
    string PeeringId,
    string Id = null,
    DataHcpAzurePeeringConnectionTimeouts Timeouts = null,
    object WaitForActiveState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.hvnLink">HvnLink</a></code> | <code>string</code> | The `self_link` of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.peeringId">PeeringId</a></code> | <code>string</code> | The ID of the peering connection. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.76.0/docs/data-sources/azure_peering_connection#id DataHcpAzurePeeringConnection#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts">DataHcpAzurePeeringConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.waitForActiveState">WaitForActiveState</a></code> | <code>object</code> | If `true`, Terraform will wait for the peering connection to reach an `ACTIVE` state before continuing. Default `false`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HvnLink`<sup>Required</sup> <a name="HvnLink" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.hvnLink"></a>

```csharp
public string HvnLink { get; set; }
```

- *Type:* string

The `self_link` of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.76.0/docs/data-sources/azure_peering_connection#hvn_link DataHcpAzurePeeringConnection#hvn_link}

---

##### `PeeringId`<sup>Required</sup> <a name="PeeringId" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.peeringId"></a>

```csharp
public string PeeringId { get; set; }
```

- *Type:* string

The ID of the peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.76.0/docs/data-sources/azure_peering_connection#peering_id DataHcpAzurePeeringConnection#peering_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.76.0/docs/data-sources/azure_peering_connection#id DataHcpAzurePeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.timeouts"></a>

```csharp
public DataHcpAzurePeeringConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts">DataHcpAzurePeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.76.0/docs/data-sources/azure_peering_connection#timeouts DataHcpAzurePeeringConnection#timeouts}

---

##### `WaitForActiveState`<sup>Optional</sup> <a name="WaitForActiveState" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionConfig.property.waitForActiveState"></a>

```csharp
public object WaitForActiveState { get; set; }
```

- *Type:* object

If `true`, Terraform will wait for the peering connection to reach an `ACTIVE` state before continuing. Default `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.76.0/docs/data-sources/azure_peering_connection#wait_for_active_state DataHcpAzurePeeringConnection#wait_for_active_state}

---

### DataHcpAzurePeeringConnectionTimeouts <a name="DataHcpAzurePeeringConnectionTimeouts" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpAzurePeeringConnectionTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.76.0/docs/data-sources/azure_peering_connection#read DataHcpAzurePeeringConnection#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.76.0/docs/data-sources/azure_peering_connection#read DataHcpAzurePeeringConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpAzurePeeringConnectionTimeoutsOutputReference <a name="DataHcpAzurePeeringConnectionTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpAzurePeeringConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpAzurePeeringConnection.DataHcpAzurePeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



