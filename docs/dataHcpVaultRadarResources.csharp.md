# `dataHcpVaultRadarResources` Submodule <a name="`dataHcpVaultRadarResources` Submodule" id="@cdktf/provider-hcp.dataHcpVaultRadarResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpVaultRadarResources <a name="DataHcpVaultRadarResources" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/data-sources/vault_radar_resources hcp_vault_radar_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultRadarResources(Construct Scope, string Id, DataHcpVaultRadarResourcesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig">DataHcpVaultRadarResourcesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutUriLikeFilter` <a name="PutUriLikeFilter" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.putUriLikeFilter"></a>

```csharp
private void PutUriLikeFilter(DataHcpVaultRadarResourcesUriLikeFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.putUriLikeFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a>

---

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.resetProjectId"></a>

```csharp
private void ResetProjectId()
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

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpVaultRadarResources.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpVaultRadarResources.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpVaultRadarResources.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpVaultRadarResources.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataHcpVaultRadarResources resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpVaultRadarResources to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpVaultRadarResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/data-sources/vault_radar_resources#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpVaultRadarResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList">DataHcpVaultRadarResourcesResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.uriLikeFilter">UriLikeFilter</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference">DataHcpVaultRadarResourcesUriLikeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.uriLikeFilterInput">UriLikeFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.resources"></a>

```csharp
public DataHcpVaultRadarResourcesResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList">DataHcpVaultRadarResourcesResourcesList</a>

---

##### `UriLikeFilter`<sup>Required</sup> <a name="UriLikeFilter" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.uriLikeFilter"></a>

```csharp
public DataHcpVaultRadarResourcesUriLikeFilterOutputReference UriLikeFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference">DataHcpVaultRadarResourcesUriLikeFilterOutputReference</a>

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `UriLikeFilterInput`<sup>Optional</sup> <a name="UriLikeFilterInput" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.uriLikeFilterInput"></a>

```csharp
public object UriLikeFilterInput { get; }
```

- *Type:* object

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpVaultRadarResourcesConfig <a name="DataHcpVaultRadarResourcesConfig" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultRadarResourcesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataHcpVaultRadarResourcesUriLikeFilter UriLikeFilter,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.uriLikeFilter">UriLikeFilter</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a></code> | Applies a filter to the radar resources based on their URIs. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UriLikeFilter`<sup>Required</sup> <a name="UriLikeFilter" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.uriLikeFilter"></a>

```csharp
public DataHcpVaultRadarResourcesUriLikeFilter UriLikeFilter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a>

Applies a filter to the radar resources based on their URIs.

The filter uses the SQL LIKE operator, which allows for wildcard matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/data-sources/vault_radar_resources#uri_like_filter DataHcpVaultRadarResources#uri_like_filter}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/data-sources/vault_radar_resources#project_id DataHcpVaultRadarResources#project_id}

---

### DataHcpVaultRadarResourcesResources <a name="DataHcpVaultRadarResourcesResources" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultRadarResourcesResources {

};
```


### DataHcpVaultRadarResourcesUriLikeFilter <a name="DataHcpVaultRadarResourcesUriLikeFilter" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultRadarResourcesUriLikeFilter {
    string[] Values,
    object CaseInsensitive = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.property.values">Values</a></code> | <code>string[]</code> | URI like filters to apply radar resources. Each entry in the list will act like an or condition. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.property.caseInsensitive">CaseInsensitive</a></code> | <code>object</code> | If true, the uri like filter will be case insensitive. Defaults to false. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

URI like filters to apply radar resources. Each entry in the list will act like an or condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/data-sources/vault_radar_resources#values DataHcpVaultRadarResources#values}

---

##### `CaseInsensitive`<sup>Optional</sup> <a name="CaseInsensitive" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.property.caseInsensitive"></a>

```csharp
public object CaseInsensitive { get; set; }
```

- *Type:* object

If true, the uri like filter will be case insensitive. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/data-sources/vault_radar_resources#case_insensitive DataHcpVaultRadarResources#case_insensitive}

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpVaultRadarResourcesResourcesList <a name="DataHcpVaultRadarResourcesResourcesList" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultRadarResourcesResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.get"></a>

```csharp
private DataHcpVaultRadarResourcesResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataHcpVaultRadarResourcesResourcesOutputReference <a name="DataHcpVaultRadarResourcesResourcesOutputReference" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultRadarResourcesResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceInfo">DataSourceInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceName">DataSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceType">DataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.detectorType">DetectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceId">HcpResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceName">HcpResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceStatus">HcpResourceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResources">DataHcpVaultRadarResourcesResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; }
```

- *Type:* string

---

##### `DataSourceInfo`<sup>Required</sup> <a name="DataSourceInfo" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceInfo"></a>

```csharp
public string DataSourceInfo { get; }
```

- *Type:* string

---

##### `DataSourceName`<sup>Required</sup> <a name="DataSourceName" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceName"></a>

```csharp
public string DataSourceName { get; }
```

- *Type:* string

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceType"></a>

```csharp
public string DataSourceType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DetectorType`<sup>Required</sup> <a name="DetectorType" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.detectorType"></a>

```csharp
public string DetectorType { get; }
```

- *Type:* string

---

##### `HcpResourceId`<sup>Required</sup> <a name="HcpResourceId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceId"></a>

```csharp
public string HcpResourceId { get; }
```

- *Type:* string

---

##### `HcpResourceName`<sup>Required</sup> <a name="HcpResourceName" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceName"></a>

```csharp
public string HcpResourceName { get; }
```

- *Type:* string

---

##### `HcpResourceStatus`<sup>Required</sup> <a name="HcpResourceStatus" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceStatus"></a>

```csharp
public string HcpResourceStatus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.internalValue"></a>

```csharp
public DataHcpVaultRadarResourcesResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResources">DataHcpVaultRadarResourcesResources</a>

---


### DataHcpVaultRadarResourcesUriLikeFilterOutputReference <a name="DataHcpVaultRadarResourcesUriLikeFilterOutputReference" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultRadarResourcesUriLikeFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaseInsensitive` <a name="ResetCaseInsensitive" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.resetCaseInsensitive"></a>

```csharp
private void ResetCaseInsensitive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.caseInsensitiveInput">CaseInsensitiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.caseInsensitive">CaseInsensitive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaseInsensitiveInput`<sup>Optional</sup> <a name="CaseInsensitiveInput" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.caseInsensitiveInput"></a>

```csharp
public object CaseInsensitiveInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `CaseInsensitive`<sup>Required</sup> <a name="CaseInsensitive" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.caseInsensitive"></a>

```csharp
public object CaseInsensitive { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



