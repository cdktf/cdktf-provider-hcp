# `dataHcpVaultSecretsSecret` Submodule <a name="`dataHcpVaultSecretsSecret` Submodule" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpVaultSecretsSecret <a name="DataHcpVaultSecretsSecret" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/data-sources/vault_secrets_secret hcp_vault_secrets_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultSecretsSecret(Construct Scope, string Id, DataHcpVaultSecretsSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig">DataHcpVaultSecretsSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig">DataHcpVaultSecretsSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpVaultSecretsSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpVaultSecretsSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpVaultSecretsSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpVaultSecretsSecret.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpVaultSecretsSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataHcpVaultSecretsSecret resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpVaultSecretsSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpVaultSecretsSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/data-sources/vault_secrets_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpVaultSecretsSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.secretValue">SecretValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.appNameInput">AppNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `SecretValue`<sup>Required</sup> <a name="SecretValue" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.secretValue"></a>

```csharp
public string SecretValue { get; }
```

- *Type:* string

---

##### `AppNameInput`<sup>Optional</sup> <a name="AppNameInput" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.appNameInput"></a>

```csharp
public string AppNameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpVaultSecretsSecretConfig <a name="DataHcpVaultSecretsSecretConfig" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultSecretsSecretConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppName,
    string SecretName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.appName">AppName</a></code> | <code>string</code> | The name of the Vault Secrets application. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.secretName">SecretName</a></code> | <code>string</code> | The name of the Vault Secrets secret. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.appName"></a>

```csharp
public string AppName { get; set; }
```

- *Type:* string

The name of the Vault Secrets application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/data-sources/vault_secrets_secret#app_name DataHcpVaultSecretsSecret#app_name}

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-hcp.dataHcpVaultSecretsSecret.DataHcpVaultSecretsSecretConfig.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

The name of the Vault Secrets secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/data-sources/vault_secrets_secret#secret_name DataHcpVaultSecretsSecret#secret_name}

---



