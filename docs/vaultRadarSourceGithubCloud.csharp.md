# `vaultRadarSourceGithubCloud` Submodule <a name="`vaultRadarSourceGithubCloud` Submodule" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarSourceGithubCloud <a name="VaultRadarSourceGithubCloud" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_source_github_cloud hcp_vault_radar_source_github_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultRadarSourceGithubCloud(Construct Scope, string Id, VaultRadarSourceGithubCloudConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig">VaultRadarSourceGithubCloudConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig">VaultRadarSourceGithubCloudConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetDetectorType">ResetDetectorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDetectorType` <a name="ResetDetectorType" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetDetectorType"></a>

```csharp
private void ResetDetectorType()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultRadarSourceGithubCloud resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultRadarSourceGithubCloud.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultRadarSourceGithubCloud.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultRadarSourceGithubCloud.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultRadarSourceGithubCloud.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VaultRadarSourceGithubCloud resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultRadarSourceGithubCloud to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultRadarSourceGithubCloud that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_source_github_cloud#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarSourceGithubCloud to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.detectorTypeInput">DetectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.githubOrganizationInput">GithubOrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.detectorType">DetectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.githubOrganization">GithubOrganization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DetectorTypeInput`<sup>Optional</sup> <a name="DetectorTypeInput" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.detectorTypeInput"></a>

```csharp
public string DetectorTypeInput { get; }
```

- *Type:* string

---

##### `GithubOrganizationInput`<sup>Optional</sup> <a name="GithubOrganizationInput" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.githubOrganizationInput"></a>

```csharp
public string GithubOrganizationInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `DetectorType`<sup>Required</sup> <a name="DetectorType" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.detectorType"></a>

```csharp
public string DetectorType { get; }
```

- *Type:* string

---

##### `GithubOrganization`<sup>Required</sup> <a name="GithubOrganization" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.githubOrganization"></a>

```csharp
public string GithubOrganization { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloud.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarSourceGithubCloudConfig <a name="VaultRadarSourceGithubCloudConfig" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultRadarSourceGithubCloudConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GithubOrganization,
    string Token,
    string DetectorType = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.githubOrganization">GithubOrganization</a></code> | <code>string</code> | GitHub organization Vault Radar will monitor. Example: type "octocat" for the org https://github.com/octocat. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.token">Token</a></code> | <code>string</code> | GitHub personal access token. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.detectorType">DetectorType</a></code> | <code>string</code> | The detector type which will monitor this resource. The default is HCP if not specified. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `GithubOrganization`<sup>Required</sup> <a name="GithubOrganization" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.githubOrganization"></a>

```csharp
public string GithubOrganization { get; set; }
```

- *Type:* string

GitHub organization Vault Radar will monitor. Example: type "octocat" for the org https://github.com/octocat.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_source_github_cloud#github_organization VaultRadarSourceGithubCloud#github_organization}

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

GitHub personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_source_github_cloud#token VaultRadarSourceGithubCloud#token}

---

##### `DetectorType`<sup>Optional</sup> <a name="DetectorType" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.detectorType"></a>

```csharp
public string DetectorType { get; set; }
```

- *Type:* string

The detector type which will monitor this resource. The default is HCP if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_source_github_cloud#detector_type VaultRadarSourceGithubCloud#detector_type}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultRadarSourceGithubCloud.VaultRadarSourceGithubCloudConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_source_github_cloud#project_id VaultRadarSourceGithubCloud#project_id}

---



