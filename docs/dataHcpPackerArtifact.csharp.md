# `dataHcpPackerArtifact` Submodule <a name="`dataHcpPackerArtifact` Submodule" id="@cdktf/provider-hcp.dataHcpPackerArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpPackerArtifact <a name="DataHcpPackerArtifact" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/packer_artifact hcp_packer_artifact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpPackerArtifact(Construct Scope, string Id, DataHcpPackerArtifactConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig">DataHcpPackerArtifactConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig">DataHcpPackerArtifactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetChannelName">ResetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetComponentType">ResetComponentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetVersionFingerprint">ResetVersionFingerprint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetChannelName"></a>

```csharp
private void ResetChannelName()
```

##### `ResetComponentType` <a name="ResetComponentType" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetComponentType"></a>

```csharp
private void ResetComponentType()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetVersionFingerprint` <a name="ResetVersionFingerprint" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.resetVersionFingerprint"></a>

```csharp
private void ResetVersionFingerprint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpPackerArtifact resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpPackerArtifact.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpPackerArtifact.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpPackerArtifact.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpPackerArtifact.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataHcpPackerArtifact resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpPackerArtifact to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpPackerArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/packer_artifact#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpPackerArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.buildId">BuildId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.externalIdentifier">ExternalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.packerRunUuid">PackerRunUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.revokeAt">RevokeAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelNameInput">ChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentTypeInput">ComponentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprintInput">VersionFingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentType">ComponentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprint">VersionFingerprint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BuildId`<sup>Required</sup> <a name="BuildId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.buildId"></a>

```csharp
public string BuildId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ExternalIdentifier`<sup>Required</sup> <a name="ExternalIdentifier" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.externalIdentifier"></a>

```csharp
public string ExternalIdentifier { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `PackerRunUuid`<sup>Required</sup> <a name="PackerRunUuid" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.packerRunUuid"></a>

```csharp
public string PackerRunUuid { get; }
```

- *Type:* string

---

##### `RevokeAt`<sup>Required</sup> <a name="RevokeAt" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.revokeAt"></a>

```csharp
public string RevokeAt { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelNameInput"></a>

```csharp
public string ChannelNameInput { get; }
```

- *Type:* string

---

##### `ComponentTypeInput`<sup>Optional</sup> <a name="ComponentTypeInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentTypeInput"></a>

```csharp
public string ComponentTypeInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VersionFingerprintInput`<sup>Optional</sup> <a name="VersionFingerprintInput" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprintInput"></a>

```csharp
public string VersionFingerprintInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.componentType"></a>

```csharp
public string ComponentType { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `VersionFingerprint`<sup>Required</sup> <a name="VersionFingerprint" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.versionFingerprint"></a>

```csharp
public string VersionFingerprint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifact.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpPackerArtifactConfig <a name="DataHcpPackerArtifactConfig" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpPackerArtifactConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BucketName,
    string Platform,
    string Region,
    string ChannelName = null,
    string ComponentType = null,
    string ProjectId = null,
    string VersionFingerprint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.bucketName">BucketName</a></code> | <code>string</code> | The name of the HCP Packer Bucket where the Artifact is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.platform">Platform</a></code> | <code>string</code> | Name of the platform where the HCP Packer Artifact is stored. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.region">Region</a></code> | <code>string</code> | The Region where the HCP Packer Artifact is stored, if any. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.channelName">ChannelName</a></code> | <code>string</code> | The name of the HCP Packer Channel the Version containing this Artifact is assigned to. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.componentType">ComponentType</a></code> | <code>string</code> | Name of the Packer builder that built this Artifact. Ex: `amazon-ebs.example`. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP Organization where the Artifact is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.versionFingerprint">VersionFingerprint</a></code> | <code>string</code> | The fingerprint of the HCP Packer Version where the Artifact is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The name of the HCP Packer Bucket where the Artifact is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/packer_artifact#bucket_name DataHcpPackerArtifact#bucket_name}

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

Name of the platform where the HCP Packer Artifact is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/packer_artifact#platform DataHcpPackerArtifact#platform}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Region where the HCP Packer Artifact is stored, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/packer_artifact#region DataHcpPackerArtifact#region}

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.channelName"></a>

```csharp
public string ChannelName { get; set; }
```

- *Type:* string

The name of the HCP Packer Channel the Version containing this Artifact is assigned to.

The Version currently assigned to the Channel will be fetched.
Exactly one of `channel_name` or `version_fingerprint` must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/packer_artifact#channel_name DataHcpPackerArtifact#channel_name}

---

##### `ComponentType`<sup>Optional</sup> <a name="ComponentType" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.componentType"></a>

```csharp
public string ComponentType { get; set; }
```

- *Type:* string

Name of the Packer builder that built this Artifact. Ex: `amazon-ebs.example`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/packer_artifact#component_type DataHcpPackerArtifact#component_type}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP Organization where the Artifact is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/packer_artifact#project_id DataHcpPackerArtifact#project_id}

---

##### `VersionFingerprint`<sup>Optional</sup> <a name="VersionFingerprint" id="@cdktf/provider-hcp.dataHcpPackerArtifact.DataHcpPackerArtifactConfig.property.versionFingerprint"></a>

```csharp
public string VersionFingerprint { get; set; }
```

- *Type:* string

The fingerprint of the HCP Packer Version where the Artifact is located.

If provided in the config, it is used to fetch the Version.
Exactly one of `channel_name` or `version_fingerprint` must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/packer_artifact#version_fingerprint DataHcpPackerArtifact#version_fingerprint}

---



