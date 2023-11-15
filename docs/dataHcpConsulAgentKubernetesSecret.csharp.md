# `data_hcp_consul_agent_kubernetes_secret`

Refer to the Terraform Registory for docs: [`data_hcp_consul_agent_kubernetes_secret`](https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/data-sources/consul_agent_kubernetes_secret).

# `dataHcpConsulAgentKubernetesSecret` Submodule <a name="`dataHcpConsulAgentKubernetesSecret` Submodule" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpConsulAgentKubernetesSecret <a name="DataHcpConsulAgentKubernetesSecret" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/data-sources/consul_agent_kubernetes_secret hcp_consul_agent_kubernetes_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpConsulAgentKubernetesSecret(Construct Scope, string Id, DataHcpConsulAgentKubernetesSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig">DataHcpConsulAgentKubernetesSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig">DataHcpConsulAgentKubernetesSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.putTimeouts"></a>

```csharp
private void PutTimeouts(DataHcpConsulAgentKubernetesSecretTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts">DataHcpConsulAgentKubernetesSecretTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpConsulAgentKubernetesSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpConsulAgentKubernetesSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpConsulAgentKubernetesSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpConsulAgentKubernetesSecret.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpConsulAgentKubernetesSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataHcpConsulAgentKubernetesSecret resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpConsulAgentKubernetesSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpConsulAgentKubernetesSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/data-sources/consul_agent_kubernetes_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpConsulAgentKubernetesSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference">DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.timeouts"></a>

```csharp
public DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference">DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpConsulAgentKubernetesSecretConfig <a name="DataHcpConsulAgentKubernetesSecretConfig" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpConsulAgentKubernetesSecretConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string Id = null,
    string ProjectId = null,
    DataHcpConsulAgentKubernetesSecretTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | The ID of the HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/data-sources/consul_agent_kubernetes_secret#id DataHcpConsulAgentKubernetesSecret#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where the HCP Consul cluster is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts">DataHcpConsulAgentKubernetesSecretTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The ID of the HCP Consul cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/data-sources/consul_agent_kubernetes_secret#cluster_id DataHcpConsulAgentKubernetesSecret#cluster_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/data-sources/consul_agent_kubernetes_secret#id DataHcpConsulAgentKubernetesSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where the HCP Consul cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/data-sources/consul_agent_kubernetes_secret#project_id DataHcpConsulAgentKubernetesSecret#project_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretConfig.property.timeouts"></a>

```csharp
public DataHcpConsulAgentKubernetesSecretTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts">DataHcpConsulAgentKubernetesSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/data-sources/consul_agent_kubernetes_secret#timeouts DataHcpConsulAgentKubernetesSecret#timeouts}

---

### DataHcpConsulAgentKubernetesSecretTimeouts <a name="DataHcpConsulAgentKubernetesSecretTimeouts" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpConsulAgentKubernetesSecretTimeouts {
    string Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/data-sources/consul_agent_kubernetes_secret#default DataHcpConsulAgentKubernetesSecret#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/data-sources/consul_agent_kubernetes_secret#default DataHcpConsulAgentKubernetesSecret#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference <a name="DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpConsulAgentKubernetesSecret.DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



