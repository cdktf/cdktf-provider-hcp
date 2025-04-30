# `waypointAddOn` Submodule <a name="`waypointAddOn` Submodule" id="@cdktf/provider-hcp.waypointAddOn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointAddOn <a name="WaypointAddOn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/waypoint_add_on hcp_waypoint_add_on}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOn(Construct Scope, string Id, WaypointAddOnConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig">WaypointAddOnConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig">WaypointAddOnConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.putAddOnInputVariables">PutAddOnInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetAddOnInputVariables">ResetAddOnInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAddOnInputVariables` <a name="PutAddOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.putAddOnInputVariables"></a>

```csharp
private void PutAddOnInputVariables(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.putAddOnInputVariables.parameter.value"></a>

- *Type:* object

---

##### `ResetAddOnInputVariables` <a name="ResetAddOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetAddOnInputVariables"></a>

```csharp
private void ResetAddOnInputVariables()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WaypointAddOn resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

WaypointAddOn.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

WaypointAddOn.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

WaypointAddOn.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

WaypointAddOn.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WaypointAddOn resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WaypointAddOn to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WaypointAddOn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/waypoint_add_on#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WaypointAddOn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnDefinitionInputVariables">AddOnDefinitionInputVariables</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList">WaypointAddOnAddOnDefinitionInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnInputVariables">AddOnInputVariables</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList">WaypointAddOnAddOnInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.installCount">InstallCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.outputValues">OutputValues</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList">WaypointAddOnOutputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.readmeMarkdown">ReadmeMarkdown</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.status">Status</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformNoCodeModuleSource">TerraformNoCodeModuleSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnInputVariablesInput">AddOnInputVariablesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.definitionIdInput">DefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.definitionId">DefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AddOnDefinitionInputVariables`<sup>Required</sup> <a name="AddOnDefinitionInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnDefinitionInputVariables"></a>

```csharp
public WaypointAddOnAddOnDefinitionInputVariablesList AddOnDefinitionInputVariables { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList">WaypointAddOnAddOnDefinitionInputVariablesList</a>

---

##### `AddOnInputVariables`<sup>Required</sup> <a name="AddOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnInputVariables"></a>

```csharp
public WaypointAddOnAddOnInputVariablesList AddOnInputVariables { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList">WaypointAddOnAddOnInputVariablesList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstallCount`<sup>Required</sup> <a name="InstallCount" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.installCount"></a>

```csharp
public double InstallCount { get; }
```

- *Type:* double

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `OutputValues`<sup>Required</sup> <a name="OutputValues" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.outputValues"></a>

```csharp
public WaypointAddOnOutputValuesList OutputValues { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList">WaypointAddOnOutputValuesList</a>

---

##### `ReadmeMarkdown`<sup>Required</sup> <a name="ReadmeMarkdown" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.readmeMarkdown"></a>

```csharp
public string ReadmeMarkdown { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.status"></a>

```csharp
public double Status { get; }
```

- *Type:* double

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `TerraformNoCodeModuleSource`<sup>Required</sup> <a name="TerraformNoCodeModuleSource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformNoCodeModuleSource"></a>

```csharp
public string TerraformNoCodeModuleSource { get; }
```

- *Type:* string

---

##### `AddOnInputVariablesInput`<sup>Optional</sup> <a name="AddOnInputVariablesInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnInputVariablesInput"></a>

```csharp
public object AddOnInputVariablesInput { get; }
```

- *Type:* object

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `DefinitionIdInput`<sup>Optional</sup> <a name="DefinitionIdInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.definitionIdInput"></a>

```csharp
public string DefinitionIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `DefinitionId`<sup>Required</sup> <a name="DefinitionId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.definitionId"></a>

```csharp
public string DefinitionId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointAddOnAddOnDefinitionInputVariables <a name="WaypointAddOnAddOnDefinitionInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnAddOnDefinitionInputVariables {
    string Name,
    string Value,
    string VariableType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.name">Name</a></code> | <code>string</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.value">Value</a></code> | <code>string</code> | Variable value. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.variableType">VariableType</a></code> | <code>string</code> | Variable type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/waypoint_add_on#name WaypointAddOn#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/waypoint_add_on#value WaypointAddOn#value}

---

##### `VariableType`<sup>Optional</sup> <a name="VariableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.variableType"></a>

```csharp
public string VariableType { get; set; }
```

- *Type:* string

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/waypoint_add_on#variable_type WaypointAddOn#variable_type}

---

### WaypointAddOnAddOnInputVariables <a name="WaypointAddOnAddOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnAddOnInputVariables {
    string Name,
    string Value,
    string VariableType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.name">Name</a></code> | <code>string</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.value">Value</a></code> | <code>string</code> | Variable value. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.variableType">VariableType</a></code> | <code>string</code> | Variable type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/waypoint_add_on#name WaypointAddOn#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/waypoint_add_on#value WaypointAddOn#value}

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.variableType"></a>

```csharp
public string VariableType { get; set; }
```

- *Type:* string

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/waypoint_add_on#variable_type WaypointAddOn#variable_type}

---

### WaypointAddOnConfig <a name="WaypointAddOnConfig" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationId,
    string DefinitionId,
    string Name,
    object AddOnInputVariables = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | The ID of the Application that this Add-on is created for. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.definitionId">DefinitionId</a></code> | <code>string</code> | The ID of the Add-on Definition that this Add-on is created from. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.name">Name</a></code> | <code>string</code> | The name of the Add-on. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.addOnInputVariables">AddOnInputVariables</a></code> | <code>object</code> | Input variables set for the add-on. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where the Waypoint AddOn is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The ID of the Application that this Add-on is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/waypoint_add_on#application_id WaypointAddOn#application_id}

---

##### `DefinitionId`<sup>Required</sup> <a name="DefinitionId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.definitionId"></a>

```csharp
public string DefinitionId { get; set; }
```

- *Type:* string

The ID of the Add-on Definition that this Add-on is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/waypoint_add_on#definition_id WaypointAddOn#definition_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/waypoint_add_on#name WaypointAddOn#name}

---

##### `AddOnInputVariables`<sup>Optional</sup> <a name="AddOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.addOnInputVariables"></a>

```csharp
public object AddOnInputVariables { get; set; }
```

- *Type:* object

Input variables set for the add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/waypoint_add_on#add_on_input_variables WaypointAddOn#add_on_input_variables}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where the Waypoint AddOn is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/waypoint_add_on#project_id WaypointAddOn#project_id}

---

### WaypointAddOnOutputValues <a name="WaypointAddOnOutputValues" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnOutputValues {

};
```


## Classes <a name="Classes" id="Classes"></a>

### WaypointAddOnAddOnDefinitionInputVariablesList <a name="WaypointAddOnAddOnDefinitionInputVariablesList" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnAddOnDefinitionInputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.get"></a>

```csharp
private WaypointAddOnAddOnDefinitionInputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WaypointAddOnAddOnDefinitionInputVariablesOutputReference <a name="WaypointAddOnAddOnDefinitionInputVariablesOutputReference" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnAddOnDefinitionInputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resetVariableType">ResetVariableType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVariableType` <a name="ResetVariableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resetVariableType"></a>

```csharp
private void ResetVariableType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.variableTypeInput">VariableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.variableType">VariableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables">WaypointAddOnAddOnDefinitionInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VariableTypeInput`<sup>Optional</sup> <a name="VariableTypeInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.variableTypeInput"></a>

```csharp
public string VariableTypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.variableType"></a>

```csharp
public string VariableType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.internalValue"></a>

```csharp
public WaypointAddOnAddOnDefinitionInputVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables">WaypointAddOnAddOnDefinitionInputVariables</a>

---


### WaypointAddOnAddOnInputVariablesList <a name="WaypointAddOnAddOnInputVariablesList" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnAddOnInputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.get"></a>

```csharp
private WaypointAddOnAddOnInputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WaypointAddOnAddOnInputVariablesOutputReference <a name="WaypointAddOnAddOnInputVariablesOutputReference" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnAddOnInputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.variableTypeInput">VariableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.variableType">VariableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VariableTypeInput`<sup>Optional</sup> <a name="VariableTypeInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.variableTypeInput"></a>

```csharp
public string VariableTypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.variableType"></a>

```csharp
public string VariableType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WaypointAddOnOutputValuesList <a name="WaypointAddOnOutputValuesList" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnOutputValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.get"></a>

```csharp
private WaypointAddOnOutputValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WaypointAddOnOutputValuesOutputReference <a name="WaypointAddOnOutputValuesOutputReference" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnOutputValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.sensitive">Sensitive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValues">WaypointAddOnOutputValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Sensitive`<sup>Required</sup> <a name="Sensitive" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.sensitive"></a>

```csharp
public IResolvable Sensitive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.internalValue"></a>

```csharp
public WaypointAddOnOutputValues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValues">WaypointAddOnOutputValues</a>

---



