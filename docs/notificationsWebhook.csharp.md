# `notificationsWebhook` Submodule <a name="`notificationsWebhook` Submodule" id="@cdktf/provider-hcp.notificationsWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsWebhook <a name="NotificationsWebhook" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook hcp_notifications_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new NotificationsWebhook(Construct Scope, string Id, NotificationsWebhookConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig">NotificationsWebhookConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig">NotificationsWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putSubscriptions">PutSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetSubscriptions">ResetSubscriptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putConfig"></a>

```csharp
private void PutConfig(NotificationsWebhookConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>

---

##### `PutSubscriptions` <a name="PutSubscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putSubscriptions"></a>

```csharp
private void PutSubscriptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putSubscriptions.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetSubscriptions` <a name="ResetSubscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetSubscriptions"></a>

```csharp
private void ResetSubscriptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationsWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

NotificationsWebhook.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

NotificationsWebhook.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

NotificationsWebhook.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

NotificationsWebhook.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NotificationsWebhook resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationsWebhook to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationsWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NotificationsWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference">NotificationsWebhookConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptions">Subscriptions</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList">NotificationsWebhookSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.configInput">ConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptionsInput">SubscriptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.config"></a>

```csharp
public NotificationsWebhookConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference">NotificationsWebhookConfigAOutputReference</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptions"></a>

```csharp
public NotificationsWebhookSubscriptionsList Subscriptions { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList">NotificationsWebhookSubscriptionsList</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.configInput"></a>

```csharp
public object ConfigInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `SubscriptionsInput`<sup>Optional</sup> <a name="SubscriptionsInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptionsInput"></a>

```csharp
public object SubscriptionsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsWebhookConfig <a name="NotificationsWebhookConfig" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new NotificationsWebhookConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    NotificationsWebhookConfigA Config,
    string Name,
    string Description = null,
    object Enabled = null,
    string ProjectId = null,
    object Subscriptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a></code> | The webhook configuration used to deliver event payloads. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.name">Name</a></code> | <code>string</code> | The webhook's name. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.description">Description</a></code> | <code>string</code> | The webhook's description. Descriptions are useful for helping others understand the purpose of the webhook. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.enabled">Enabled</a></code> | <code>object</code> | Indicates if the webhook should receive payloads for the subscribed events. Defaults to `true`. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project to create the webhook under. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.subscriptions">Subscriptions</a></code> | <code>object</code> | Set of events to subscribe the webhook to all resources or a specific resource in the project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.config"></a>

```csharp
public NotificationsWebhookConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>

The webhook configuration used to deliver event payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#config NotificationsWebhook#config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The webhook's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#name NotificationsWebhook#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The webhook's description. Descriptions are useful for helping others understand the purpose of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#description NotificationsWebhook#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Indicates if the webhook should receive payloads for the subscribed events. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#enabled NotificationsWebhook#enabled}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project to create the webhook under.

If unspecified, the webhook will be created in the project the provider is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#project_id NotificationsWebhook#project_id}

---

##### `Subscriptions`<sup>Optional</sup> <a name="Subscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.subscriptions"></a>

```csharp
public object Subscriptions { get; set; }
```

- *Type:* object

Set of events to subscribe the webhook to all resources or a specific resource in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#subscriptions NotificationsWebhook#subscriptions}

---

### NotificationsWebhookConfigA <a name="NotificationsWebhookConfigA" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new NotificationsWebhookConfigA {
    string Url,
    string HmacKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.url">Url</a></code> | <code>string</code> | The HTTP or HTTPS destination URL that HCP delivers the event payloads to. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.hmacKey">HmacKey</a></code> | <code>string</code> | The arbitrary secret that HCP uses to sign all its webhook requests. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The HTTP or HTTPS destination URL that HCP delivers the event payloads to.

The destination must be able to use the HCP webhook
[payload](https://developer.hashicorp.com/hcp/docs/hcp/admin/projects/webhooks#webhook-payload).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#url NotificationsWebhook#url}

---

##### `HmacKey`<sup>Optional</sup> <a name="HmacKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.hmacKey"></a>

```csharp
public string HmacKey { get; set; }
```

- *Type:* string

The arbitrary secret that HCP uses to sign all its webhook requests.

This is a write-only field, it is written once and not visible thereafter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#hmac_key NotificationsWebhook#hmac_key}

---

### NotificationsWebhookSubscriptions <a name="NotificationsWebhookSubscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new NotificationsWebhookSubscriptions {
    object Events,
    string ResourceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.events">Events</a></code> | <code>object</code> | The information about the events of a webhook subscription. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.resourceId">ResourceId</a></code> | <code>string</code> | Refers to the resource the webhook is subscribed to. |

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.events"></a>

```csharp
public object Events { get; set; }
```

- *Type:* object

The information about the events of a webhook subscription.

The service that owns the resource is responsible for maintaining events. Refer to the service's webhook documentation for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#events NotificationsWebhook#events}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Refers to the resource the webhook is subscribed to.

If not set, the webhook subscribes to the emitted events listed in events for any resource in the webhook's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#resource_id NotificationsWebhook#resource_id}

---

### NotificationsWebhookSubscriptionsEvents <a name="NotificationsWebhookSubscriptionsEvents" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new NotificationsWebhookSubscriptionsEvents {
    string[] Actions,
    string Source
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.actions">Actions</a></code> | <code>string[]</code> | The list of event actions subscribed for the resource type set as the [source](#source). |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.source">Source</a></code> | <code>string</code> | The resource type of the source of the event. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

The list of event actions subscribed for the resource type set as the [source](#source).

For example, `["create", "update"]`. When the action is '*', it means that the webhook is subscribed to all event actions for the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#actions NotificationsWebhook#actions}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The resource type of the source of the event.

For example, `hashicorp.packer.version`. Event source might not be the same type as the resource that the webhook is subscribed to ([resource_id](#resource_id)) if the event is from a descendant resource. For example, webhooks are subscribed to a `hashicorp.packer.registry` and receive events for descendent resources such as a `hashicorp.packer.version`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#source NotificationsWebhook#source}

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationsWebhookConfigAOutputReference <a name="NotificationsWebhookConfigAOutputReference" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new NotificationsWebhookConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resetHmacKey">ResetHmacKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHmacKey` <a name="ResetHmacKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resetHmacKey"></a>

```csharp
private void ResetHmacKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKeyInput">HmacKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKey">HmacKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HmacKeyInput`<sup>Optional</sup> <a name="HmacKeyInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKeyInput"></a>

```csharp
public string HmacKeyInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `HmacKey`<sup>Required</sup> <a name="HmacKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKey"></a>

```csharp
public string HmacKey { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationsWebhookSubscriptionsEventsList <a name="NotificationsWebhookSubscriptionsEventsList" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new NotificationsWebhookSubscriptionsEventsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.get"></a>

```csharp
private NotificationsWebhookSubscriptionsEventsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationsWebhookSubscriptionsEventsOutputReference <a name="NotificationsWebhookSubscriptionsEventsOutputReference" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new NotificationsWebhookSubscriptionsEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationsWebhookSubscriptionsList <a name="NotificationsWebhookSubscriptionsList" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new NotificationsWebhookSubscriptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.get"></a>

```csharp
private NotificationsWebhookSubscriptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationsWebhookSubscriptionsOutputReference <a name="NotificationsWebhookSubscriptionsOutputReference" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new NotificationsWebhookSubscriptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.putEvents">PutEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvents` <a name="PutEvents" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.putEvents"></a>

```csharp
private void PutEvents(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.putEvents.parameter.value"></a>

- *Type:* object

---

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resetResourceId"></a>

```csharp
private void ResetResourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.events">Events</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList">NotificationsWebhookSubscriptionsEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.eventsInput">EventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.events"></a>

```csharp
public NotificationsWebhookSubscriptionsEventsList Events { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList">NotificationsWebhookSubscriptionsEventsList</a>

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.eventsInput"></a>

```csharp
public object EventsInput { get; }
```

- *Type:* object

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



