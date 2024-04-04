# `waypointApplicationTemplate` Submodule <a name="`waypointApplicationTemplate` Submodule" id="@cdktf/provider-hcp.waypointApplicationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointApplicationTemplate <a name="WaypointApplicationTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template hcp_waypoint_application_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointApplicationTemplate(Construct Scope, string Id, WaypointApplicationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig">WaypointApplicationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig">WaypointApplicationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformCloudWorkspaceDetails">PutTerraformCloudWorkspaceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformNoCodeModule">PutTerraformNoCodeModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetReadmeMarkdownTemplate">ResetReadmeMarkdownTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTerraformCloudWorkspaceDetails` <a name="PutTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformCloudWorkspaceDetails"></a>

```csharp
private void PutTerraformCloudWorkspaceDetails(WaypointApplicationTemplateTerraformCloudWorkspaceDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformCloudWorkspaceDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

---

##### `PutTerraformNoCodeModule` <a name="PutTerraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformNoCodeModule"></a>

```csharp
private void PutTerraformNoCodeModule(WaypointApplicationTemplateTerraformNoCodeModule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformNoCodeModule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetReadmeMarkdownTemplate` <a name="ResetReadmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetReadmeMarkdownTemplate"></a>

```csharp
private void ResetReadmeMarkdownTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WaypointApplicationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

WaypointApplicationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

WaypointApplicationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

WaypointApplicationTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

WaypointApplicationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WaypointApplicationTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WaypointApplicationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WaypointApplicationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WaypointApplicationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetails">TerraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference">WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModule">TerraformNoCodeModule</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference">WaypointApplicationTemplateTerraformNoCodeModuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplateInput">ReadmeMarkdownTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summaryInput">SummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetailsInput">TerraformCloudWorkspaceDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModuleInput">TerraformNoCodeModuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplate">ReadmeMarkdownTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summary">Summary</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `TerraformCloudWorkspaceDetails`<sup>Required</sup> <a name="TerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetails"></a>

```csharp
public WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference TerraformCloudWorkspaceDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference">WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `TerraformNoCodeModule`<sup>Required</sup> <a name="TerraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModule"></a>

```csharp
public WaypointApplicationTemplateTerraformNoCodeModuleOutputReference TerraformNoCodeModule { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference">WaypointApplicationTemplateTerraformNoCodeModuleOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ReadmeMarkdownTemplateInput`<sup>Optional</sup> <a name="ReadmeMarkdownTemplateInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplateInput"></a>

```csharp
public string ReadmeMarkdownTemplateInput { get; }
```

- *Type:* string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summaryInput"></a>

```csharp
public string SummaryInput { get; }
```

- *Type:* string

---

##### `TerraformCloudWorkspaceDetailsInput`<sup>Optional</sup> <a name="TerraformCloudWorkspaceDetailsInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetailsInput"></a>

```csharp
public object TerraformCloudWorkspaceDetailsInput { get; }
```

- *Type:* object

---

##### `TerraformNoCodeModuleInput`<sup>Optional</sup> <a name="TerraformNoCodeModuleInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModuleInput"></a>

```csharp
public object TerraformNoCodeModuleInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ReadmeMarkdownTemplate`<sup>Required</sup> <a name="ReadmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplate"></a>

```csharp
public string ReadmeMarkdownTemplate { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointApplicationTemplateConfig <a name="WaypointApplicationTemplateConfig" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointApplicationTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Summary,
    WaypointApplicationTemplateTerraformCloudWorkspaceDetails TerraformCloudWorkspaceDetails,
    WaypointApplicationTemplateTerraformNoCodeModule TerraformNoCodeModule,
    string Description = null,
    string[] Labels = null,
    string ProjectId = null,
    string ReadmeMarkdownTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.name">Name</a></code> | <code>string</code> | The name of the Application Template. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.summary">Summary</a></code> | <code>string</code> | A brief description of the template, up to 110 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformCloudWorkspaceDetails">TerraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformNoCodeModule">TerraformNoCodeModule</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a></code> | Terraform Cloud No-Code Module details. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.description">Description</a></code> | <code>string</code> | A description of the template, along with when and why it should be used, up to 500 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.labels">Labels</a></code> | <code>string[]</code> | List of labels attached to this Application Template. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where the Waypoint Application Template is located. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.readmeMarkdownTemplate">ReadmeMarkdownTemplate</a></code> | <code>string</code> | Instructions for using the template (markdown format supported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.summary"></a>

```csharp
public string Summary { get; set; }
```

- *Type:* string

A brief description of the template, up to 110 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template#summary WaypointApplicationTemplate#summary}

---

##### `TerraformCloudWorkspaceDetails`<sup>Required</sup> <a name="TerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformCloudWorkspaceDetails"></a>

```csharp
public WaypointApplicationTemplateTerraformCloudWorkspaceDetails TerraformCloudWorkspaceDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template#terraform_cloud_workspace_details WaypointApplicationTemplate#terraform_cloud_workspace_details}

---

##### `TerraformNoCodeModule`<sup>Required</sup> <a name="TerraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformNoCodeModule"></a>

```csharp
public WaypointApplicationTemplateTerraformNoCodeModule TerraformNoCodeModule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>

Terraform Cloud No-Code Module details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template#terraform_no_code_module WaypointApplicationTemplate#terraform_no_code_module}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the template, along with when and why it should be used, up to 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template#description WaypointApplicationTemplate#description}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

List of labels attached to this Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template#labels WaypointApplicationTemplate#labels}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where the Waypoint Application Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template#project_id WaypointApplicationTemplate#project_id}

---

##### `ReadmeMarkdownTemplate`<sup>Optional</sup> <a name="ReadmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.readmeMarkdownTemplate"></a>

```csharp
public string ReadmeMarkdownTemplate { get; set; }
```

- *Type:* string

Instructions for using the template (markdown format supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template#readme_markdown_template WaypointApplicationTemplate#readme_markdown_template}

---

### WaypointApplicationTemplateTerraformCloudWorkspaceDetails <a name="WaypointApplicationTemplateTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointApplicationTemplateTerraformCloudWorkspaceDetails {
    string Name,
    string TerraformProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.name">Name</a></code> | <code>string</code> | Name of the Terraform Cloud Workspace. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.terraformProjectId">TerraformProjectId</a></code> | <code>string</code> | Terraform Cloud Project ID. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Terraform Cloud Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}

---

##### `TerraformProjectId`<sup>Required</sup> <a name="TerraformProjectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.terraformProjectId"></a>

```csharp
public string TerraformProjectId { get; set; }
```

- *Type:* string

Terraform Cloud Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template#terraform_project_id WaypointApplicationTemplate#terraform_project_id}

---

### WaypointApplicationTemplateTerraformNoCodeModule <a name="WaypointApplicationTemplateTerraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointApplicationTemplateTerraformNoCodeModule {
    string Source,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.source">Source</a></code> | <code>string</code> | No-Code Module Source. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.version">Version</a></code> | <code>string</code> | No-Code Module Version. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

No-Code Module Source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template#source WaypointApplicationTemplate#source}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

No-Code Module Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/waypoint_application_template#version WaypointApplicationTemplate#version}

---

## Classes <a name="Classes" id="Classes"></a>

### WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference <a name="WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput">TerraformProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">TerraformProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TerraformProjectIdInput`<sup>Optional</sup> <a name="TerraformProjectIdInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput"></a>

```csharp
public string TerraformProjectIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformProjectId`<sup>Required</sup> <a name="TerraformProjectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```csharp
public string TerraformProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WaypointApplicationTemplateTerraformNoCodeModuleOutputReference <a name="WaypointApplicationTemplateTerraformNoCodeModuleOutputReference" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new WaypointApplicationTemplateTerraformNoCodeModuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



