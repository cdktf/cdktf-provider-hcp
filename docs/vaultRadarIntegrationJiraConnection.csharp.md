# `vaultRadarIntegrationJiraConnection` Submodule <a name="`vaultRadarIntegrationJiraConnection` Submodule" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarIntegrationJiraConnection <a name="VaultRadarIntegrationJiraConnection" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_radar_integration_jira_connection hcp_vault_radar_integration_jira_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultRadarIntegrationJiraConnection(Construct Scope, string Id, VaultRadarIntegrationJiraConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig">VaultRadarIntegrationJiraConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig">VaultRadarIntegrationJiraConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultRadarIntegrationJiraConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultRadarIntegrationJiraConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultRadarIntegrationJiraConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultRadarIntegrationJiraConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultRadarIntegrationJiraConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VaultRadarIntegrationJiraConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultRadarIntegrationJiraConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultRadarIntegrationJiraConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_radar_integration_jira_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarIntegrationJiraConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarIntegrationJiraConnectionConfig <a name="VaultRadarIntegrationJiraConnectionConfig" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultRadarIntegrationJiraConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BaseUrl,
    string Email,
    string Name,
    string Token,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.baseUrl">BaseUrl</a></code> | <code>string</code> | The Jira base URL. Example: https://acme.atlassian.net. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.email">Email</a></code> | <code>string</code> | Jira user's email. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.name">Name</a></code> | <code>string</code> | Name of connection. Name must be unique. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.token">Token</a></code> | <code>string</code> | A Jira API token. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

The Jira base URL. Example: https://acme.atlassian.net.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_radar_integration_jira_connection#base_url VaultRadarIntegrationJiraConnection#base_url}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Jira user's email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_radar_integration_jira_connection#email VaultRadarIntegrationJiraConnection#email}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of connection. Name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_radar_integration_jira_connection#name VaultRadarIntegrationJiraConnection#name}

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

A Jira API token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_radar_integration_jira_connection#token VaultRadarIntegrationJiraConnection#token}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraConnection.VaultRadarIntegrationJiraConnectionConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_radar_integration_jira_connection#project_id VaultRadarIntegrationJiraConnection#project_id}

---



