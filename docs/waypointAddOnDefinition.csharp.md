# `waypointAddOnDefinition` Submodule <a name="`waypointAddOnDefinition` Submodule" id="@cdktf/provider-hcp.waypointAddOnDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointAddOnDefinition <a name="WaypointAddOnDefinition" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition hcp_waypoint_add_on_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnDefinition(Construct Scope, string Id, WaypointAddOnDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig">WaypointAddOnDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig">WaypointAddOnDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putTerraformCloudWorkspaceDetails">PutTerraformCloudWorkspaceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putVariableOptions">PutVariableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetReadmeMarkdownTemplate">ResetReadmeMarkdownTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformAgentPoolId">ResetTerraformAgentPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformCloudWorkspaceDetails">ResetTerraformCloudWorkspaceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformExecutionMode">ResetTerraformExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetVariableOptions">ResetVariableOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTerraformCloudWorkspaceDetails` <a name="PutTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putTerraformCloudWorkspaceDetails"></a>

```csharp
private void PutTerraformCloudWorkspaceDetails(WaypointAddOnDefinitionTerraformCloudWorkspaceDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putTerraformCloudWorkspaceDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>

---

##### `PutVariableOptions` <a name="PutVariableOptions" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putVariableOptions"></a>

```csharp
private void PutVariableOptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putVariableOptions.parameter.value"></a>

- *Type:* object

---

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetReadmeMarkdownTemplate` <a name="ResetReadmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetReadmeMarkdownTemplate"></a>

```csharp
private void ResetReadmeMarkdownTemplate()
```

##### `ResetTerraformAgentPoolId` <a name="ResetTerraformAgentPoolId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformAgentPoolId"></a>

```csharp
private void ResetTerraformAgentPoolId()
```

##### `ResetTerraformCloudWorkspaceDetails` <a name="ResetTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformCloudWorkspaceDetails"></a>

```csharp
private void ResetTerraformCloudWorkspaceDetails()
```

##### `ResetTerraformExecutionMode` <a name="ResetTerraformExecutionMode" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformExecutionMode"></a>

```csharp
private void ResetTerraformExecutionMode()
```

##### `ResetVariableOptions` <a name="ResetVariableOptions" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetVariableOptions"></a>

```csharp
private void ResetVariableOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WaypointAddOnDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

WaypointAddOnDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

WaypointAddOnDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

WaypointAddOnDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

WaypointAddOnDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WaypointAddOnDefinition resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WaypointAddOnDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WaypointAddOnDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WaypointAddOnDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformCloudWorkspaceDetails">TerraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference">WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.variableOptions">VariableOptions</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList">WaypointAddOnDefinitionVariableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.readmeMarkdownTemplateInput">ReadmeMarkdownTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.summaryInput">SummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformAgentPoolIdInput">TerraformAgentPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformCloudWorkspaceDetailsInput">TerraformCloudWorkspaceDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformExecutionModeInput">TerraformExecutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleIdInput">TerraformNoCodeModuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleSourceInput">TerraformNoCodeModuleSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformProjectIdInput">TerraformProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.variableOptionsInput">VariableOptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.readmeMarkdownTemplate">ReadmeMarkdownTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformAgentPoolId">TerraformAgentPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformExecutionMode">TerraformExecutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleId">TerraformNoCodeModuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleSource">TerraformNoCodeModuleSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformProjectId">TerraformProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `TerraformCloudWorkspaceDetails`<sup>Required</sup> <a name="TerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformCloudWorkspaceDetails"></a>

```csharp
public WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference TerraformCloudWorkspaceDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference">WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `VariableOptions`<sup>Required</sup> <a name="VariableOptions" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.variableOptions"></a>

```csharp
public WaypointAddOnDefinitionVariableOptionsList VariableOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList">WaypointAddOnDefinitionVariableOptionsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ReadmeMarkdownTemplateInput`<sup>Optional</sup> <a name="ReadmeMarkdownTemplateInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.readmeMarkdownTemplateInput"></a>

```csharp
public string ReadmeMarkdownTemplateInput { get; }
```

- *Type:* string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.summaryInput"></a>

```csharp
public string SummaryInput { get; }
```

- *Type:* string

---

##### `TerraformAgentPoolIdInput`<sup>Optional</sup> <a name="TerraformAgentPoolIdInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformAgentPoolIdInput"></a>

```csharp
public string TerraformAgentPoolIdInput { get; }
```

- *Type:* string

---

##### `TerraformCloudWorkspaceDetailsInput`<sup>Optional</sup> <a name="TerraformCloudWorkspaceDetailsInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformCloudWorkspaceDetailsInput"></a>

```csharp
public object TerraformCloudWorkspaceDetailsInput { get; }
```

- *Type:* object

---

##### `TerraformExecutionModeInput`<sup>Optional</sup> <a name="TerraformExecutionModeInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformExecutionModeInput"></a>

```csharp
public string TerraformExecutionModeInput { get; }
```

- *Type:* string

---

##### `TerraformNoCodeModuleIdInput`<sup>Optional</sup> <a name="TerraformNoCodeModuleIdInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleIdInput"></a>

```csharp
public string TerraformNoCodeModuleIdInput { get; }
```

- *Type:* string

---

##### `TerraformNoCodeModuleSourceInput`<sup>Optional</sup> <a name="TerraformNoCodeModuleSourceInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleSourceInput"></a>

```csharp
public string TerraformNoCodeModuleSourceInput { get; }
```

- *Type:* string

---

##### `TerraformProjectIdInput`<sup>Optional</sup> <a name="TerraformProjectIdInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformProjectIdInput"></a>

```csharp
public string TerraformProjectIdInput { get; }
```

- *Type:* string

---

##### `VariableOptionsInput`<sup>Optional</sup> <a name="VariableOptionsInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.variableOptionsInput"></a>

```csharp
public object VariableOptionsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ReadmeMarkdownTemplate`<sup>Required</sup> <a name="ReadmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.readmeMarkdownTemplate"></a>

```csharp
public string ReadmeMarkdownTemplate { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `TerraformAgentPoolId`<sup>Required</sup> <a name="TerraformAgentPoolId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformAgentPoolId"></a>

```csharp
public string TerraformAgentPoolId { get; }
```

- *Type:* string

---

##### `TerraformExecutionMode`<sup>Required</sup> <a name="TerraformExecutionMode" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformExecutionMode"></a>

```csharp
public string TerraformExecutionMode { get; }
```

- *Type:* string

---

##### `TerraformNoCodeModuleId`<sup>Required</sup> <a name="TerraformNoCodeModuleId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleId"></a>

```csharp
public string TerraformNoCodeModuleId { get; }
```

- *Type:* string

---

##### `TerraformNoCodeModuleSource`<sup>Required</sup> <a name="TerraformNoCodeModuleSource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleSource"></a>

```csharp
public string TerraformNoCodeModuleSource { get; }
```

- *Type:* string

---

##### `TerraformProjectId`<sup>Required</sup> <a name="TerraformProjectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformProjectId"></a>

```csharp
public string TerraformProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointAddOnDefinitionConfig <a name="WaypointAddOnDefinitionConfig" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnDefinitionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    string Name,
    string Summary,
    string TerraformNoCodeModuleId,
    string TerraformNoCodeModuleSource,
    string TerraformProjectId,
    string[] Labels = null,
    string ProjectId = null,
    string ReadmeMarkdownTemplate = null,
    string TerraformAgentPoolId = null,
    WaypointAddOnDefinitionTerraformCloudWorkspaceDetails TerraformCloudWorkspaceDetails = null,
    string TerraformExecutionMode = null,
    object VariableOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.description">Description</a></code> | <code>string</code> | A longer description of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.name">Name</a></code> | <code>string</code> | The name of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.summary">Summary</a></code> | <code>string</code> | A short summary of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformNoCodeModuleId">TerraformNoCodeModuleId</a></code> | <code>string</code> | The ID of the Terraform no-code module to use for running Terraform operations. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformNoCodeModuleSource">TerraformNoCodeModuleSource</a></code> | <code>string</code> | Terraform Cloud no-code Module Source, expected to be in one of the following formats: "app.terraform.io/hcp_waypoint_example/ecs-advanced-microservice/aws" or "private/hcp_waypoint_example/ecs-advanced-microservice/aws". |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformProjectId">TerraformProjectId</a></code> | <code>string</code> | The ID of the Terraform Cloud Project to create workspaces in. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.labels">Labels</a></code> | <code>string[]</code> | List of labels attached to this Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where the Waypoint Add-on Definition is located. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.readmeMarkdownTemplate">ReadmeMarkdownTemplate</a></code> | <code>string</code> | The markdown template for the Add-on Definition README (markdown format supported). |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformAgentPoolId">TerraformAgentPoolId</a></code> | <code>string</code> | The ID of the Terraform agent pool to use for running Terraform operations. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformCloudWorkspaceDetails">TerraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. If not provided, defaults to the HCP Terraform project of the associated application. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformExecutionMode">TerraformExecutionMode</a></code> | <code>string</code> | The execution mode of the HCP Terraform workspaces for add-ons using this add-on definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.variableOptions">VariableOptions</a></code> | <code>object</code> | List of variable options for the Add-on Definition. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A longer description of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#description WaypointAddOnDefinition#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.summary"></a>

```csharp
public string Summary { get; set; }
```

- *Type:* string

A short summary of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#summary WaypointAddOnDefinition#summary}

---

##### `TerraformNoCodeModuleId`<sup>Required</sup> <a name="TerraformNoCodeModuleId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformNoCodeModuleId"></a>

```csharp
public string TerraformNoCodeModuleId { get; set; }
```

- *Type:* string

The ID of the Terraform no-code module to use for running Terraform operations.

This is in the format of 'nocode-<ID>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#terraform_no_code_module_id WaypointAddOnDefinition#terraform_no_code_module_id}

---

##### `TerraformNoCodeModuleSource`<sup>Required</sup> <a name="TerraformNoCodeModuleSource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformNoCodeModuleSource"></a>

```csharp
public string TerraformNoCodeModuleSource { get; set; }
```

- *Type:* string

Terraform Cloud no-code Module Source, expected to be in one of the following formats: "app.terraform.io/hcp_waypoint_example/ecs-advanced-microservice/aws" or "private/hcp_waypoint_example/ecs-advanced-microservice/aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#terraform_no_code_module_source WaypointAddOnDefinition#terraform_no_code_module_source}

---

##### `TerraformProjectId`<sup>Required</sup> <a name="TerraformProjectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformProjectId"></a>

```csharp
public string TerraformProjectId { get; set; }
```

- *Type:* string

The ID of the Terraform Cloud Project to create workspaces in.

The ID is found on the Terraform Cloud Project settings page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#terraform_project_id WaypointAddOnDefinition#terraform_project_id}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

List of labels attached to this Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#labels WaypointAddOnDefinition#labels}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where the Waypoint Add-on Definition is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#project_id WaypointAddOnDefinition#project_id}

---

##### `ReadmeMarkdownTemplate`<sup>Optional</sup> <a name="ReadmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.readmeMarkdownTemplate"></a>

```csharp
public string ReadmeMarkdownTemplate { get; set; }
```

- *Type:* string

The markdown template for the Add-on Definition README (markdown format supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#readme_markdown_template WaypointAddOnDefinition#readme_markdown_template}

---

##### `TerraformAgentPoolId`<sup>Optional</sup> <a name="TerraformAgentPoolId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformAgentPoolId"></a>

```csharp
public string TerraformAgentPoolId { get; set; }
```

- *Type:* string

The ID of the Terraform agent pool to use for running Terraform operations.

This is only applicable when the execution mode is set to 'agent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#terraform_agent_pool_id WaypointAddOnDefinition#terraform_agent_pool_id}

---

##### `TerraformCloudWorkspaceDetails`<sup>Optional</sup> <a name="TerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformCloudWorkspaceDetails"></a>

```csharp
public WaypointAddOnDefinitionTerraformCloudWorkspaceDetails TerraformCloudWorkspaceDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details. If not provided, defaults to the HCP Terraform project of the associated application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#terraform_cloud_workspace_details WaypointAddOnDefinition#terraform_cloud_workspace_details}

---

##### `TerraformExecutionMode`<sup>Optional</sup> <a name="TerraformExecutionMode" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformExecutionMode"></a>

```csharp
public string TerraformExecutionMode { get; set; }
```

- *Type:* string

The execution mode of the HCP Terraform workspaces for add-ons using this add-on definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#terraform_execution_mode WaypointAddOnDefinition#terraform_execution_mode}

---

##### `VariableOptions`<sup>Optional</sup> <a name="VariableOptions" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.variableOptions"></a>

```csharp
public object VariableOptions { get; set; }
```

- *Type:* object

List of variable options for the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#variable_options WaypointAddOnDefinition#variable_options}

---

### WaypointAddOnDefinitionTerraformCloudWorkspaceDetails <a name="WaypointAddOnDefinitionTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnDefinitionTerraformCloudWorkspaceDetails {
    string Name,
    string TerraformProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.property.name">Name</a></code> | <code>string</code> | Name of the Terraform Cloud Project. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.property.terraformProjectId">TerraformProjectId</a></code> | <code>string</code> | Terraform Cloud Project ID. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Terraform Cloud Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}

---

##### `TerraformProjectId`<sup>Required</sup> <a name="TerraformProjectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.property.terraformProjectId"></a>

```csharp
public string TerraformProjectId { get; set; }
```

- *Type:* string

Terraform Cloud Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#terraform_project_id WaypointAddOnDefinition#terraform_project_id}

---

### WaypointAddOnDefinitionVariableOptions <a name="WaypointAddOnDefinitionVariableOptions" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnDefinitionVariableOptions {
    string Name,
    string VariableType,
    string[] Options = null,
    object UserEditable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.name">Name</a></code> | <code>string</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.variableType">VariableType</a></code> | <code>string</code> | Variable type. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.options">Options</a></code> | <code>string[]</code> | List of options. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.userEditable">UserEditable</a></code> | <code>object</code> | Whether the variable is editable by the user creating an add-on. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.variableType"></a>

```csharp
public string VariableType { get; set; }
```

- *Type:* string

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#variable_type WaypointAddOnDefinition#variable_type}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.options"></a>

```csharp
public string[] Options { get; set; }
```

- *Type:* string[]

List of options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#options WaypointAddOnDefinition#options}

---

##### `UserEditable`<sup>Optional</sup> <a name="UserEditable" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.userEditable"></a>

```csharp
public object UserEditable { get; set; }
```

- *Type:* object

Whether the variable is editable by the user creating an add-on.

If options are provided, then the user may only use those options, regardless of this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/waypoint_add_on_definition#user_editable WaypointAddOnDefinition#user_editable}

---

## Classes <a name="Classes" id="Classes"></a>

### WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference <a name="WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput">TerraformProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">TerraformProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TerraformProjectIdInput`<sup>Optional</sup> <a name="TerraformProjectIdInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput"></a>

```csharp
public string TerraformProjectIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformProjectId`<sup>Required</sup> <a name="TerraformProjectId" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```csharp
public string TerraformProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WaypointAddOnDefinitionVariableOptionsList <a name="WaypointAddOnDefinitionVariableOptionsList" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnDefinitionVariableOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.get"></a>

```csharp
private WaypointAddOnDefinitionVariableOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WaypointAddOnDefinitionVariableOptionsOutputReference <a name="WaypointAddOnDefinitionVariableOptionsOutputReference" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointAddOnDefinitionVariableOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resetUserEditable">ResetUserEditable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetUserEditable` <a name="ResetUserEditable" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resetUserEditable"></a>

```csharp
private void ResetUserEditable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.optionsInput">OptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditableInput">UserEditableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.variableTypeInput">VariableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.options">Options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditable">UserEditable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.variableType">VariableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.optionsInput"></a>

```csharp
public string[] OptionsInput { get; }
```

- *Type:* string[]

---

##### `UserEditableInput`<sup>Optional</sup> <a name="UserEditableInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditableInput"></a>

```csharp
public object UserEditableInput { get; }
```

- *Type:* object

---

##### `VariableTypeInput`<sup>Optional</sup> <a name="VariableTypeInput" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.variableTypeInput"></a>

```csharp
public string VariableTypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.options"></a>

```csharp
public string[] Options { get; }
```

- *Type:* string[]

---

##### `UserEditable`<sup>Required</sup> <a name="UserEditable" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditable"></a>

```csharp
public object UserEditable { get; }
```

- *Type:* object

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.variableType"></a>

```csharp
public string VariableType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



