# `consulCluster` Submodule <a name="`consulCluster` Submodule" id="@cdktf/provider-hcp.consulCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulCluster <a name="ConsulCluster" id="@cdktf/provider-hcp.consulCluster.ConsulCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster hcp_consul_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new ConsulCluster(Construct Scope, string Id, ConsulClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig">ConsulClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig">ConsulClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.putIpAllowlist">PutIpAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetAutoHvnToHvnPeering">ResetAutoHvnToHvnPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetConnectEnabled">ResetConnectEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetIpAllowlist">ResetIpAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetMinConsulVersion">ResetMinConsulVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPrimaryLink">ResetPrimaryLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPublicEndpoint">ResetPublicEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpAllowlist` <a name="PutIpAllowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putIpAllowlist"></a>

```csharp
private void PutIpAllowlist(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putIpAllowlist.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(ConsulClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>

---

##### `ResetAutoHvnToHvnPeering` <a name="ResetAutoHvnToHvnPeering" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetAutoHvnToHvnPeering"></a>

```csharp
private void ResetAutoHvnToHvnPeering()
```

##### `ResetConnectEnabled` <a name="ResetConnectEnabled" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetConnectEnabled"></a>

```csharp
private void ResetConnectEnabled()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAllowlist` <a name="ResetIpAllowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetIpAllowlist"></a>

```csharp
private void ResetIpAllowlist()
```

##### `ResetMinConsulVersion` <a name="ResetMinConsulVersion" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetMinConsulVersion"></a>

```csharp
private void ResetMinConsulVersion()
```

##### `ResetPrimaryLink` <a name="ResetPrimaryLink" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPrimaryLink"></a>

```csharp
private void ResetPrimaryLink()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetPublicEndpoint` <a name="ResetPublicEndpoint" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPublicEndpoint"></a>

```csharp
private void ResetPublicEndpoint()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConsulCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

ConsulCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

ConsulCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

ConsulCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

ConsulCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ConsulCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConsulCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConsulCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ConsulCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulAutomaticUpgrades">ConsulAutomaticUpgrades</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulCaFile">ConsulCaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulConfigFile">ConsulConfigFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPrivateEndpointUrl">ConsulPrivateEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPublicEndpointUrl">ConsulPublicEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenAccessorId">ConsulRootTokenAccessorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenSecretId">ConsulRootTokenSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotInterval">ConsulSnapshotInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotRetention">ConsulSnapshotRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulVersion">ConsulVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlist">IpAllowlist</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList">ConsulClusterIpAllowlistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.scale">Scale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference">ConsulClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeeringInput">AutoHvnToHvnPeeringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabledInput">ConnectEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnIdInput">HvnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlistInput">IpAllowlistInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersionInput">MinConsulVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLinkInput">PrimaryLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpointInput">PublicEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.sizeInput">SizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeering">AutoHvnToHvnPeering</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabled">ConnectEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnId">HvnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersion">MinConsulVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLink">PrimaryLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpoint">PublicEndpoint</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.size">Size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tier">Tier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; }
```

- *Type:* string

---

##### `ConsulAutomaticUpgrades`<sup>Required</sup> <a name="ConsulAutomaticUpgrades" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulAutomaticUpgrades"></a>

```csharp
public IResolvable ConsulAutomaticUpgrades { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ConsulCaFile`<sup>Required</sup> <a name="ConsulCaFile" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulCaFile"></a>

```csharp
public string ConsulCaFile { get; }
```

- *Type:* string

---

##### `ConsulConfigFile`<sup>Required</sup> <a name="ConsulConfigFile" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulConfigFile"></a>

```csharp
public string ConsulConfigFile { get; }
```

- *Type:* string

---

##### `ConsulPrivateEndpointUrl`<sup>Required</sup> <a name="ConsulPrivateEndpointUrl" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPrivateEndpointUrl"></a>

```csharp
public string ConsulPrivateEndpointUrl { get; }
```

- *Type:* string

---

##### `ConsulPublicEndpointUrl`<sup>Required</sup> <a name="ConsulPublicEndpointUrl" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPublicEndpointUrl"></a>

```csharp
public string ConsulPublicEndpointUrl { get; }
```

- *Type:* string

---

##### `ConsulRootTokenAccessorId`<sup>Required</sup> <a name="ConsulRootTokenAccessorId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenAccessorId"></a>

```csharp
public string ConsulRootTokenAccessorId { get; }
```

- *Type:* string

---

##### `ConsulRootTokenSecretId`<sup>Required</sup> <a name="ConsulRootTokenSecretId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenSecretId"></a>

```csharp
public string ConsulRootTokenSecretId { get; }
```

- *Type:* string

---

##### `ConsulSnapshotInterval`<sup>Required</sup> <a name="ConsulSnapshotInterval" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotInterval"></a>

```csharp
public string ConsulSnapshotInterval { get; }
```

- *Type:* string

---

##### `ConsulSnapshotRetention`<sup>Required</sup> <a name="ConsulSnapshotRetention" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotRetention"></a>

```csharp
public string ConsulSnapshotRetention { get; }
```

- *Type:* string

---

##### `ConsulVersion`<sup>Required</sup> <a name="ConsulVersion" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulVersion"></a>

```csharp
public string ConsulVersion { get; }
```

- *Type:* string

---

##### `IpAllowlist`<sup>Required</sup> <a name="IpAllowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlist"></a>

```csharp
public ConsulClusterIpAllowlistStructList IpAllowlist { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList">ConsulClusterIpAllowlistStructList</a>

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.scale"></a>

```csharp
public double Scale { get; }
```

- *Type:* double

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeouts"></a>

```csharp
public ConsulClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference">ConsulClusterTimeoutsOutputReference</a>

---

##### `AutoHvnToHvnPeeringInput`<sup>Optional</sup> <a name="AutoHvnToHvnPeeringInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeeringInput"></a>

```csharp
public object AutoHvnToHvnPeeringInput { get; }
```

- *Type:* object

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ConnectEnabledInput`<sup>Optional</sup> <a name="ConnectEnabledInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabledInput"></a>

```csharp
public object ConnectEnabledInput { get; }
```

- *Type:* object

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `HvnIdInput`<sup>Optional</sup> <a name="HvnIdInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnIdInput"></a>

```csharp
public string HvnIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAllowlistInput`<sup>Optional</sup> <a name="IpAllowlistInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlistInput"></a>

```csharp
public object IpAllowlistInput { get; }
```

- *Type:* object

---

##### `MinConsulVersionInput`<sup>Optional</sup> <a name="MinConsulVersionInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersionInput"></a>

```csharp
public string MinConsulVersionInput { get; }
```

- *Type:* string

---

##### `PrimaryLinkInput`<sup>Optional</sup> <a name="PrimaryLinkInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLinkInput"></a>

```csharp
public string PrimaryLinkInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `PublicEndpointInput`<sup>Optional</sup> <a name="PublicEndpointInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpointInput"></a>

```csharp
public object PublicEndpointInput { get; }
```

- *Type:* object

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.sizeInput"></a>

```csharp
public string SizeInput { get; }
```

- *Type:* string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutoHvnToHvnPeering`<sup>Required</sup> <a name="AutoHvnToHvnPeering" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeering"></a>

```csharp
public object AutoHvnToHvnPeering { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ConnectEnabled`<sup>Required</sup> <a name="ConnectEnabled" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabled"></a>

```csharp
public object ConnectEnabled { get; }
```

- *Type:* object

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `HvnId`<sup>Required</sup> <a name="HvnId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnId"></a>

```csharp
public string HvnId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MinConsulVersion`<sup>Required</sup> <a name="MinConsulVersion" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersion"></a>

```csharp
public string MinConsulVersion { get; }
```

- *Type:* string

---

##### `PrimaryLink`<sup>Required</sup> <a name="PrimaryLink" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLink"></a>

```csharp
public string PrimaryLink { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `PublicEndpoint`<sup>Required</sup> <a name="PublicEndpoint" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpoint"></a>

```csharp
public object PublicEndpoint { get; }
```

- *Type:* object

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulClusterConfig <a name="ConsulClusterConfig" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new ConsulClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string HvnId,
    string Tier,
    object AutoHvnToHvnPeering = null,
    object ConnectEnabled = null,
    string Datacenter = null,
    string Id = null,
    object IpAllowlist = null,
    string MinConsulVersion = null,
    string PrimaryLink = null,
    string ProjectId = null,
    object PublicEndpoint = null,
    string Size = null,
    ConsulClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | The ID of the HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.hvnId">HvnId</a></code> | <code>string</code> | The ID of the HVN this HCP Consul cluster is associated to. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.tier">Tier</a></code> | <code>string</code> | The tier that the HCP Consul cluster will be provisioned as. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.autoHvnToHvnPeering">AutoHvnToHvnPeering</a></code> | <code>object</code> | Enables automatic HVN to HVN peering when creating a secondary cluster in a federation. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connectEnabled">ConnectEnabled</a></code> | <code>object</code> | Denotes the Consul connect feature should be enabled for this cluster.  Default to true. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.datacenter">Datacenter</a></code> | <code>string</code> | The Consul data center name of the cluster. If not specified, it is defaulted to the value of `cluster_id`. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#id ConsulCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.ipAllowlist">IpAllowlist</a></code> | <code>object</code> | ip_allowlist block. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.minConsulVersion">MinConsulVersion</a></code> | <code>string</code> | The minimum Consul patch version of the cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.primaryLink">PrimaryLink</a></code> | <code>string</code> | The `self_link` of the HCP Consul cluster which is the primary in the federation setup with this HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where the HCP Consul cluster is located. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.publicEndpoint">PublicEndpoint</a></code> | <code>object</code> | Denotes that the cluster has a public endpoint for the Consul UI. Defaults to false. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.size">Size</a></code> | <code>string</code> | The t-shirt size representation of each server VM that this Consul cluster is provisioned with. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The ID of the HCP Consul cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#cluster_id ConsulCluster#cluster_id}

---

##### `HvnId`<sup>Required</sup> <a name="HvnId" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.hvnId"></a>

```csharp
public string HvnId { get; set; }
```

- *Type:* string

The ID of the HVN this HCP Consul cluster is associated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#hvn_id ConsulCluster#hvn_id}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

The tier that the HCP Consul cluster will be provisioned as.

Only `development`, `standard`, `plus`, and `premium` are available at this time. See [pricing information](https://www.hashicorp.com/products/consul/pricing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#tier ConsulCluster#tier}

---

##### `AutoHvnToHvnPeering`<sup>Optional</sup> <a name="AutoHvnToHvnPeering" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.autoHvnToHvnPeering"></a>

```csharp
public object AutoHvnToHvnPeering { get; set; }
```

- *Type:* object

Enables automatic HVN to HVN peering when creating a secondary cluster in a federation.

The alternative to using the auto-accept feature is to create an [`hcp_hvn_peering_connection`](hvn_peering_connection.md) resource that explicitly defines the HVN resources that are allowed to communicate with each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#auto_hvn_to_hvn_peering ConsulCluster#auto_hvn_to_hvn_peering}

---

##### `ConnectEnabled`<sup>Optional</sup> <a name="ConnectEnabled" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connectEnabled"></a>

```csharp
public object ConnectEnabled { get; set; }
```

- *Type:* object

Denotes the Consul connect feature should be enabled for this cluster.  Default to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#connect_enabled ConsulCluster#connect_enabled}

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

The Consul data center name of the cluster. If not specified, it is defaulted to the value of `cluster_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#datacenter ConsulCluster#datacenter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#id ConsulCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAllowlist`<sup>Optional</sup> <a name="IpAllowlist" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.ipAllowlist"></a>

```csharp
public object IpAllowlist { get; set; }
```

- *Type:* object

ip_allowlist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#ip_allowlist ConsulCluster#ip_allowlist}

---

##### `MinConsulVersion`<sup>Optional</sup> <a name="MinConsulVersion" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.minConsulVersion"></a>

```csharp
public string MinConsulVersion { get; set; }
```

- *Type:* string

The minimum Consul patch version of the cluster.

Allows only the rightmost version component to increment (E.g: `1.13.0` will allow installation of `1.13.2` and `1.13.3` etc., but not `1.14.0`). If not specified, it is defaulted to the version that is currently recommended by HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#min_consul_version ConsulCluster#min_consul_version}

---

##### `PrimaryLink`<sup>Optional</sup> <a name="PrimaryLink" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.primaryLink"></a>

```csharp
public string PrimaryLink { get; set; }
```

- *Type:* string

The `self_link` of the HCP Consul cluster which is the primary in the federation setup with this HCP Consul cluster.

If not specified, it is a standalone cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#primary_link ConsulCluster#primary_link}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where the HCP Consul cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#project_id ConsulCluster#project_id}

---

##### `PublicEndpoint`<sup>Optional</sup> <a name="PublicEndpoint" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.publicEndpoint"></a>

```csharp
public object PublicEndpoint { get; set; }
```

- *Type:* object

Denotes that the cluster has a public endpoint for the Consul UI. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#public_endpoint ConsulCluster#public_endpoint}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.size"></a>

```csharp
public string Size { get; set; }
```

- *Type:* string

The t-shirt size representation of each server VM that this Consul cluster is provisioned with.

Valid option for development tier - `x_small`. Valid options for other tiers - `small`, `medium`, `large`. For more details - https://cloud.hashicorp.com/pricing/consul. Upgrading the size of a cluster after creation is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#size ConsulCluster#size}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.timeouts"></a>

```csharp
public ConsulClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#timeouts ConsulCluster#timeouts}

---

### ConsulClusterIpAllowlistStruct <a name="ConsulClusterIpAllowlistStruct" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new ConsulClusterIpAllowlistStruct {
    string Address,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.address">Address</a></code> | <code>string</code> | IP address range in CIDR notation. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.description">Description</a></code> | <code>string</code> | Description to help identify source (maximum 255 chars). |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

IP address range in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#address ConsulCluster#address}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description to help identify source (maximum 255 chars).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#description ConsulCluster#description}

---

### ConsulClusterTimeouts <a name="ConsulClusterTimeouts" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new ConsulClusterTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#create ConsulCluster#create}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#default ConsulCluster#default}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#delete ConsulCluster#delete}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#update ConsulCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#create ConsulCluster#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#default ConsulCluster#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#delete ConsulCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/consul_cluster#update ConsulCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConsulClusterIpAllowlistStructList <a name="ConsulClusterIpAllowlistStructList" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new ConsulClusterIpAllowlistStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.get"></a>

```csharp
private ConsulClusterIpAllowlistStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsulClusterIpAllowlistStructOutputReference <a name="ConsulClusterIpAllowlistStructOutputReference" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new ConsulClusterIpAllowlistStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsulClusterTimeoutsOutputReference <a name="ConsulClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new ConsulClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



