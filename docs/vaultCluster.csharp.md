# `vaultCluster` Submodule <a name="`vaultCluster` Submodule" id="@cdktf/provider-hcp.vaultCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultCluster <a name="VaultCluster" id="@cdktf/provider-hcp.vaultCluster.VaultCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster hcp_vault_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultCluster(Construct Scope, string Id, VaultClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig">VaultClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig">VaultClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig">PutAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putIpAllowlist">PutIpAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig">PutMajorVersionUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig">PutMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetAuditLogConfig">ResetAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetIpAllowlist">ResetIpAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMajorVersionUpgradeConfig">ResetMajorVersionUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMetricsConfig">ResetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMinVaultVersion">ResetMinVaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPathsFilter">ResetPathsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPrimaryLink">ResetPrimaryLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetProxyEndpoint">ResetProxyEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPublicEndpoint">ResetPublicEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTier">ResetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuditLogConfig` <a name="PutAuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig"></a>

```csharp
private void PutAuditLogConfig(VaultClusterAuditLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

---

##### `PutIpAllowlist` <a name="PutIpAllowlist" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putIpAllowlist"></a>

```csharp
private void PutIpAllowlist(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putIpAllowlist.parameter.value"></a>

- *Type:* object

---

##### `PutMajorVersionUpgradeConfig` <a name="PutMajorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig"></a>

```csharp
private void PutMajorVersionUpgradeConfig(VaultClusterMajorVersionUpgradeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

---

##### `PutMetricsConfig` <a name="PutMetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig"></a>

```csharp
private void PutMetricsConfig(VaultClusterMetricsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(VaultClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>

---

##### `ResetAuditLogConfig` <a name="ResetAuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetAuditLogConfig"></a>

```csharp
private void ResetAuditLogConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAllowlist` <a name="ResetIpAllowlist" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetIpAllowlist"></a>

```csharp
private void ResetIpAllowlist()
```

##### `ResetMajorVersionUpgradeConfig` <a name="ResetMajorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMajorVersionUpgradeConfig"></a>

```csharp
private void ResetMajorVersionUpgradeConfig()
```

##### `ResetMetricsConfig` <a name="ResetMetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMetricsConfig"></a>

```csharp
private void ResetMetricsConfig()
```

##### `ResetMinVaultVersion` <a name="ResetMinVaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMinVaultVersion"></a>

```csharp
private void ResetMinVaultVersion()
```

##### `ResetPathsFilter` <a name="ResetPathsFilter" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPathsFilter"></a>

```csharp
private void ResetPathsFilter()
```

##### `ResetPrimaryLink` <a name="ResetPrimaryLink" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPrimaryLink"></a>

```csharp
private void ResetPrimaryLink()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetProxyEndpoint` <a name="ResetProxyEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetProxyEndpoint"></a>

```csharp
private void ResetProxyEndpoint()
```

##### `ResetPublicEndpoint` <a name="ResetPublicEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPublicEndpoint"></a>

```csharp
private void ResetPublicEndpoint()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTier"></a>

```csharp
private void ResetTier()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VaultCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VaultCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfig">AuditLogConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference">VaultClusterAuditLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.ipAllowlist">IpAllowlist</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList">VaultClusterIpAllowlistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfig">MajorVersionUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference">VaultClusterMajorVersionUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference">VaultClusterMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference">VaultClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPrivateEndpointUrl">VaultPrivateEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultProxyEndpointUrl">VaultProxyEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPublicEndpointUrl">VaultPublicEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultVersion">VaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfigInput">AuditLogConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnIdInput">HvnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.ipAllowlistInput">IpAllowlistInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfigInput">MajorVersionUpgradeConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfigInput">MetricsConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersionInput">MinVaultVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilterInput">PathsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLinkInput">PrimaryLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.proxyEndpointInput">ProxyEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpointInput">PublicEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnId">HvnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersion">MinVaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilter">PathsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLink">PrimaryLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.proxyEndpoint">ProxyEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpoint">PublicEndpoint</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tier">Tier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuditLogConfig`<sup>Required</sup> <a name="AuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfig"></a>

```csharp
public VaultClusterAuditLogConfigOutputReference AuditLogConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference">VaultClusterAuditLogConfigOutputReference</a>

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `IpAllowlist`<sup>Required</sup> <a name="IpAllowlist" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.ipAllowlist"></a>

```csharp
public VaultClusterIpAllowlistStructList IpAllowlist { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList">VaultClusterIpAllowlistStructList</a>

---

##### `MajorVersionUpgradeConfig`<sup>Required</sup> <a name="MajorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfig"></a>

```csharp
public VaultClusterMajorVersionUpgradeConfigOutputReference MajorVersionUpgradeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference">VaultClusterMajorVersionUpgradeConfigOutputReference</a>

---

##### `MetricsConfig`<sup>Required</sup> <a name="MetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfig"></a>

```csharp
public VaultClusterMetricsConfigOutputReference MetricsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference">VaultClusterMetricsConfigOutputReference</a>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeouts"></a>

```csharp
public VaultClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference">VaultClusterTimeoutsOutputReference</a>

---

##### `VaultPrivateEndpointUrl`<sup>Required</sup> <a name="VaultPrivateEndpointUrl" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPrivateEndpointUrl"></a>

```csharp
public string VaultPrivateEndpointUrl { get; }
```

- *Type:* string

---

##### `VaultProxyEndpointUrl`<sup>Required</sup> <a name="VaultProxyEndpointUrl" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultProxyEndpointUrl"></a>

```csharp
public string VaultProxyEndpointUrl { get; }
```

- *Type:* string

---

##### `VaultPublicEndpointUrl`<sup>Required</sup> <a name="VaultPublicEndpointUrl" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPublicEndpointUrl"></a>

```csharp
public string VaultPublicEndpointUrl { get; }
```

- *Type:* string

---

##### `VaultVersion`<sup>Required</sup> <a name="VaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultVersion"></a>

```csharp
public string VaultVersion { get; }
```

- *Type:* string

---

##### `AuditLogConfigInput`<sup>Optional</sup> <a name="AuditLogConfigInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfigInput"></a>

```csharp
public VaultClusterAuditLogConfig AuditLogConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `HvnIdInput`<sup>Optional</sup> <a name="HvnIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnIdInput"></a>

```csharp
public string HvnIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAllowlistInput`<sup>Optional</sup> <a name="IpAllowlistInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.ipAllowlistInput"></a>

```csharp
public object IpAllowlistInput { get; }
```

- *Type:* object

---

##### `MajorVersionUpgradeConfigInput`<sup>Optional</sup> <a name="MajorVersionUpgradeConfigInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfigInput"></a>

```csharp
public VaultClusterMajorVersionUpgradeConfig MajorVersionUpgradeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

---

##### `MetricsConfigInput`<sup>Optional</sup> <a name="MetricsConfigInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfigInput"></a>

```csharp
public VaultClusterMetricsConfig MetricsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

---

##### `MinVaultVersionInput`<sup>Optional</sup> <a name="MinVaultVersionInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersionInput"></a>

```csharp
public string MinVaultVersionInput { get; }
```

- *Type:* string

---

##### `PathsFilterInput`<sup>Optional</sup> <a name="PathsFilterInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilterInput"></a>

```csharp
public string[] PathsFilterInput { get; }
```

- *Type:* string[]

---

##### `PrimaryLinkInput`<sup>Optional</sup> <a name="PrimaryLinkInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLinkInput"></a>

```csharp
public string PrimaryLinkInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProxyEndpointInput`<sup>Optional</sup> <a name="ProxyEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.proxyEndpointInput"></a>

```csharp
public string ProxyEndpointInput { get; }
```

- *Type:* string

---

##### `PublicEndpointInput`<sup>Optional</sup> <a name="PublicEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpointInput"></a>

```csharp
public object PublicEndpointInput { get; }
```

- *Type:* object

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `HvnId`<sup>Required</sup> <a name="HvnId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnId"></a>

```csharp
public string HvnId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MinVaultVersion`<sup>Required</sup> <a name="MinVaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersion"></a>

```csharp
public string MinVaultVersion { get; }
```

- *Type:* string

---

##### `PathsFilter`<sup>Required</sup> <a name="PathsFilter" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilter"></a>

```csharp
public string[] PathsFilter { get; }
```

- *Type:* string[]

---

##### `PrimaryLink`<sup>Required</sup> <a name="PrimaryLink" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLink"></a>

```csharp
public string PrimaryLink { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ProxyEndpoint`<sup>Required</sup> <a name="ProxyEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.proxyEndpoint"></a>

```csharp
public string ProxyEndpoint { get; }
```

- *Type:* string

---

##### `PublicEndpoint`<sup>Required</sup> <a name="PublicEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpoint"></a>

```csharp
public object PublicEndpoint { get; }
```

- *Type:* object

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultClusterAuditLogConfig <a name="VaultClusterAuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultClusterAuditLogConfig {
    string CloudwatchAccessKeyId = null,
    string CloudwatchRegion = null,
    string CloudwatchSecretAccessKey = null,
    string DatadogApiKey = null,
    string DatadogRegion = null,
    string ElasticsearchEndpoint = null,
    string ElasticsearchPassword = null,
    string ElasticsearchUser = null,
    string GrafanaEndpoint = null,
    string GrafanaPassword = null,
    string GrafanaUser = null,
    string HttpBasicPassword = null,
    string HttpBasicUser = null,
    string HttpBearerToken = null,
    string HttpCodec = null,
    object HttpCompression = null,
    System.Collections.Generic.IDictionary<string, string> HttpHeaders = null,
    string HttpMethod = null,
    string HttpPayloadPrefix = null,
    string HttpPayloadSuffix = null,
    string HttpUri = null,
    string NewrelicAccountId = null,
    string NewrelicLicenseKey = null,
    string NewrelicRegion = null,
    string SplunkHecendpoint = null,
    string SplunkToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.cloudwatchAccessKeyId">CloudwatchAccessKeyId</a></code> | <code>string</code> | CloudWatch access key ID for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.cloudwatchRegion">CloudwatchRegion</a></code> | <code>string</code> | CloudWatch region for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.cloudwatchSecretAccessKey">CloudwatchSecretAccessKey</a></code> | <code>string</code> | CloudWatch secret access key for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogApiKey">DatadogApiKey</a></code> | <code>string</code> | Datadog api key for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogRegion">DatadogRegion</a></code> | <code>string</code> | Datadog region for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.elasticsearchEndpoint">ElasticsearchEndpoint</a></code> | <code>string</code> | ElasticSearch endpoint for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.elasticsearchPassword">ElasticsearchPassword</a></code> | <code>string</code> | ElasticSearch password for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.elasticsearchUser">ElasticsearchUser</a></code> | <code>string</code> | ElasticSearch user for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaEndpoint">GrafanaEndpoint</a></code> | <code>string</code> | Grafana endpoint for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaPassword">GrafanaPassword</a></code> | <code>string</code> | Grafana password for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaUser">GrafanaUser</a></code> | <code>string</code> | Grafana user for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpBasicPassword">HttpBasicPassword</a></code> | <code>string</code> | HTTP basic authentication password for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_user is also provided. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpBasicUser">HttpBasicUser</a></code> | <code>string</code> | HTTP basic authentication username for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_password is also provided. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpBearerToken">HttpBearerToken</a></code> | <code>string</code> | HTTP bearer authentication token for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_user and http_basic_password are not provided. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpCodec">HttpCodec</a></code> | <code>string</code> | HTTP codec for streaming audit logs, allowed values are JSON and NDJSON. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpCompression">HttpCompression</a></code> | <code>object</code> | HTTP compression flag for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | HTTP headers for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpMethod">HttpMethod</a></code> | <code>string</code> | HTTP payload method for streaming audit logs, , allowed values are PATCH, POST, or PUT. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpPayloadPrefix">HttpPayloadPrefix</a></code> | <code>string</code> | HTTP payload prefix for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpPayloadSuffix">HttpPayloadSuffix</a></code> | <code>string</code> | HTTP payload suffix for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpUri">HttpUri</a></code> | <code>string</code> | HTTP URI for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.newrelicAccountId">NewrelicAccountId</a></code> | <code>string</code> | NewRelic Account ID for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.newrelicLicenseKey">NewrelicLicenseKey</a></code> | <code>string</code> | NewRelic license key for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.newrelicRegion">NewrelicRegion</a></code> | <code>string</code> | NewRelic region for streaming audit logs, allowed values are "US" and "EU". |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkHecendpoint">SplunkHecendpoint</a></code> | <code>string</code> | Splunk endpoint for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkToken">SplunkToken</a></code> | <code>string</code> | Splunk token for streaming audit logs. |

---

##### `CloudwatchAccessKeyId`<sup>Optional</sup> <a name="CloudwatchAccessKeyId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.cloudwatchAccessKeyId"></a>

```csharp
public string CloudwatchAccessKeyId { get; set; }
```

- *Type:* string

CloudWatch access key ID for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#cloudwatch_access_key_id VaultCluster#cloudwatch_access_key_id}

---

##### `CloudwatchRegion`<sup>Optional</sup> <a name="CloudwatchRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.cloudwatchRegion"></a>

```csharp
public string CloudwatchRegion { get; set; }
```

- *Type:* string

CloudWatch region for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#cloudwatch_region VaultCluster#cloudwatch_region}

---

##### `CloudwatchSecretAccessKey`<sup>Optional</sup> <a name="CloudwatchSecretAccessKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.cloudwatchSecretAccessKey"></a>

```csharp
public string CloudwatchSecretAccessKey { get; set; }
```

- *Type:* string

CloudWatch secret access key for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#cloudwatch_secret_access_key VaultCluster#cloudwatch_secret_access_key}

---

##### `DatadogApiKey`<sup>Optional</sup> <a name="DatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogApiKey"></a>

```csharp
public string DatadogApiKey { get; set; }
```

- *Type:* string

Datadog api key for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}

---

##### `DatadogRegion`<sup>Optional</sup> <a name="DatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogRegion"></a>

```csharp
public string DatadogRegion { get; set; }
```

- *Type:* string

Datadog region for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#datadog_region VaultCluster#datadog_region}

---

##### `ElasticsearchEndpoint`<sup>Optional</sup> <a name="ElasticsearchEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.elasticsearchEndpoint"></a>

```csharp
public string ElasticsearchEndpoint { get; set; }
```

- *Type:* string

ElasticSearch endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#elasticsearch_endpoint VaultCluster#elasticsearch_endpoint}

---

##### `ElasticsearchPassword`<sup>Optional</sup> <a name="ElasticsearchPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.elasticsearchPassword"></a>

```csharp
public string ElasticsearchPassword { get; set; }
```

- *Type:* string

ElasticSearch password for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#elasticsearch_password VaultCluster#elasticsearch_password}

---

##### `ElasticsearchUser`<sup>Optional</sup> <a name="ElasticsearchUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.elasticsearchUser"></a>

```csharp
public string ElasticsearchUser { get; set; }
```

- *Type:* string

ElasticSearch user for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#elasticsearch_user VaultCluster#elasticsearch_user}

---

##### `GrafanaEndpoint`<sup>Optional</sup> <a name="GrafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaEndpoint"></a>

```csharp
public string GrafanaEndpoint { get; set; }
```

- *Type:* string

Grafana endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}

---

##### `GrafanaPassword`<sup>Optional</sup> <a name="GrafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaPassword"></a>

```csharp
public string GrafanaPassword { get; set; }
```

- *Type:* string

Grafana password for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#grafana_password VaultCluster#grafana_password}

---

##### `GrafanaUser`<sup>Optional</sup> <a name="GrafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaUser"></a>

```csharp
public string GrafanaUser { get; set; }
```

- *Type:* string

Grafana user for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#grafana_user VaultCluster#grafana_user}

---

##### `HttpBasicPassword`<sup>Optional</sup> <a name="HttpBasicPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpBasicPassword"></a>

```csharp
public string HttpBasicPassword { get; set; }
```

- *Type:* string

HTTP basic authentication password for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_user is also provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_basic_password VaultCluster#http_basic_password}

---

##### `HttpBasicUser`<sup>Optional</sup> <a name="HttpBasicUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpBasicUser"></a>

```csharp
public string HttpBasicUser { get; set; }
```

- *Type:* string

HTTP basic authentication username for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_password is also provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_basic_user VaultCluster#http_basic_user}

---

##### `HttpBearerToken`<sup>Optional</sup> <a name="HttpBearerToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpBearerToken"></a>

```csharp
public string HttpBearerToken { get; set; }
```

- *Type:* string

HTTP bearer authentication token for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_user and http_basic_password are not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_bearer_token VaultCluster#http_bearer_token}

---

##### `HttpCodec`<sup>Optional</sup> <a name="HttpCodec" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpCodec"></a>

```csharp
public string HttpCodec { get; set; }
```

- *Type:* string

HTTP codec for streaming audit logs, allowed values are JSON and NDJSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_codec VaultCluster#http_codec}

---

##### `HttpCompression`<sup>Optional</sup> <a name="HttpCompression" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpCompression"></a>

```csharp
public object HttpCompression { get; set; }
```

- *Type:* object

HTTP compression flag for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_compression VaultCluster#http_compression}

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

HTTP headers for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_headers VaultCluster#http_headers}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

HTTP payload method for streaming audit logs, , allowed values are PATCH, POST, or PUT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_method VaultCluster#http_method}

---

##### `HttpPayloadPrefix`<sup>Optional</sup> <a name="HttpPayloadPrefix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpPayloadPrefix"></a>

```csharp
public string HttpPayloadPrefix { get; set; }
```

- *Type:* string

HTTP payload prefix for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_payload_prefix VaultCluster#http_payload_prefix}

---

##### `HttpPayloadSuffix`<sup>Optional</sup> <a name="HttpPayloadSuffix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpPayloadSuffix"></a>

```csharp
public string HttpPayloadSuffix { get; set; }
```

- *Type:* string

HTTP payload suffix for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_payload_suffix VaultCluster#http_payload_suffix}

---

##### `HttpUri`<sup>Optional</sup> <a name="HttpUri" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpUri"></a>

```csharp
public string HttpUri { get; set; }
```

- *Type:* string

HTTP URI for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_uri VaultCluster#http_uri}

---

##### `NewrelicAccountId`<sup>Optional</sup> <a name="NewrelicAccountId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.newrelicAccountId"></a>

```csharp
public string NewrelicAccountId { get; set; }
```

- *Type:* string

NewRelic Account ID for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#newrelic_account_id VaultCluster#newrelic_account_id}

---

##### `NewrelicLicenseKey`<sup>Optional</sup> <a name="NewrelicLicenseKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.newrelicLicenseKey"></a>

```csharp
public string NewrelicLicenseKey { get; set; }
```

- *Type:* string

NewRelic license key for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#newrelic_license_key VaultCluster#newrelic_license_key}

---

##### `NewrelicRegion`<sup>Optional</sup> <a name="NewrelicRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.newrelicRegion"></a>

```csharp
public string NewrelicRegion { get; set; }
```

- *Type:* string

NewRelic region for streaming audit logs, allowed values are "US" and "EU".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#newrelic_region VaultCluster#newrelic_region}

---

##### `SplunkHecendpoint`<sup>Optional</sup> <a name="SplunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkHecendpoint"></a>

```csharp
public string SplunkHecendpoint { get; set; }
```

- *Type:* string

Splunk endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}

---

##### `SplunkToken`<sup>Optional</sup> <a name="SplunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkToken"></a>

```csharp
public string SplunkToken { get; set; }
```

- *Type:* string

Splunk token for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#splunk_token VaultCluster#splunk_token}

---

### VaultClusterConfig <a name="VaultClusterConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string HvnId,
    VaultClusterAuditLogConfig AuditLogConfig = null,
    string Id = null,
    object IpAllowlist = null,
    VaultClusterMajorVersionUpgradeConfig MajorVersionUpgradeConfig = null,
    VaultClusterMetricsConfig MetricsConfig = null,
    string MinVaultVersion = null,
    string[] PathsFilter = null,
    string PrimaryLink = null,
    string ProjectId = null,
    string ProxyEndpoint = null,
    object PublicEndpoint = null,
    string Tier = null,
    VaultClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | The ID of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.hvnId">HvnId</a></code> | <code>string</code> | The ID of the HVN this HCP Vault cluster is associated to. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.auditLogConfig">AuditLogConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#id VaultCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.ipAllowlist">IpAllowlist</a></code> | <code>object</code> | ip_allowlist block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.majorVersionUpgradeConfig">MajorVersionUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | major_version_upgrade_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.minVaultVersion">MinVaultVersion</a></code> | <code>string</code> | The minimum Vault version to use when creating the cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.pathsFilter">PathsFilter</a></code> | <code>string[]</code> | The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.primaryLink">PrimaryLink</a></code> | <code>string</code> | The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where the Vault cluster is located. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.proxyEndpoint">ProxyEndpoint</a></code> | <code>string</code> | Denotes that the cluster has a proxy endpoint. Valid options are `ENABLED`, `DISABLED`. Defaults to `DISABLED`. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.publicEndpoint">PublicEndpoint</a></code> | <code>object</code> | Denotes that the cluster has a public endpoint. Defaults to false. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.tier">Tier</a></code> | <code>string</code> | Tier of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The ID of the HCP Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#cluster_id VaultCluster#cluster_id}

---

##### `HvnId`<sup>Required</sup> <a name="HvnId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.hvnId"></a>

```csharp
public string HvnId { get; set; }
```

- *Type:* string

The ID of the HVN this HCP Vault cluster is associated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#hvn_id VaultCluster#hvn_id}

---

##### `AuditLogConfig`<sup>Optional</sup> <a name="AuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.auditLogConfig"></a>

```csharp
public VaultClusterAuditLogConfig AuditLogConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#audit_log_config VaultCluster#audit_log_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#id VaultCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAllowlist`<sup>Optional</sup> <a name="IpAllowlist" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.ipAllowlist"></a>

```csharp
public object IpAllowlist { get; set; }
```

- *Type:* object

ip_allowlist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#ip_allowlist VaultCluster#ip_allowlist}

---

##### `MajorVersionUpgradeConfig`<sup>Optional</sup> <a name="MajorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.majorVersionUpgradeConfig"></a>

```csharp
public VaultClusterMajorVersionUpgradeConfig MajorVersionUpgradeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

major_version_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#major_version_upgrade_config VaultCluster#major_version_upgrade_config}

---

##### `MetricsConfig`<sup>Optional</sup> <a name="MetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.metricsConfig"></a>

```csharp
public VaultClusterMetricsConfig MetricsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#metrics_config VaultCluster#metrics_config}

---

##### `MinVaultVersion`<sup>Optional</sup> <a name="MinVaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.minVaultVersion"></a>

```csharp
public string MinVaultVersion { get; set; }
```

- *Type:* string

The minimum Vault version to use when creating the cluster.

If not specified, it is defaulted to the version that is currently recommended by HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#min_vault_version VaultCluster#min_vault_version}

---

##### `PathsFilter`<sup>Optional</sup> <a name="PathsFilter" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.pathsFilter"></a>

```csharp
public string[] PathsFilter { get; set; }
```

- *Type:* string[]

The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#paths_filter VaultCluster#paths_filter}

---

##### `PrimaryLink`<sup>Optional</sup> <a name="PrimaryLink" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.primaryLink"></a>

```csharp
public string PrimaryLink { get; set; }
```

- *Type:* string

The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster.

If not specified, it is a standalone Plus tier HCP Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#primary_link VaultCluster#primary_link}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where the Vault cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#project_id VaultCluster#project_id}

---

##### `ProxyEndpoint`<sup>Optional</sup> <a name="ProxyEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.proxyEndpoint"></a>

```csharp
public string ProxyEndpoint { get; set; }
```

- *Type:* string

Denotes that the cluster has a proxy endpoint. Valid options are `ENABLED`, `DISABLED`. Defaults to `DISABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#proxy_endpoint VaultCluster#proxy_endpoint}

---

##### `PublicEndpoint`<sup>Optional</sup> <a name="PublicEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.publicEndpoint"></a>

```csharp
public object PublicEndpoint { get; set; }
```

- *Type:* object

Denotes that the cluster has a public endpoint. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#public_endpoint VaultCluster#public_endpoint}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

Tier of the HCP Vault cluster.

Valid options for tiers - `dev`, `starter_small`, `standard_small`, `standard_medium`, `standard_large`, `plus_small`, `plus_medium`, `plus_large`. See [pricing information](https://www.hashicorp.com/products/vault/pricing). Changing a cluster's size or tier is only available to admins. See [Scale a cluster](https://registry.terraform.io/providers/hashicorp/hcp/latest/docs/guides/vault-scaling).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#tier VaultCluster#tier}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.timeouts"></a>

```csharp
public VaultClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#timeouts VaultCluster#timeouts}

---

### VaultClusterIpAllowlistStruct <a name="VaultClusterIpAllowlistStruct" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultClusterIpAllowlistStruct {
    string Address,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct.property.address">Address</a></code> | <code>string</code> | IP address range in CIDR notation. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct.property.description">Description</a></code> | <code>string</code> | Description to help identify source (maximum 255 chars). |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

IP address range in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#address VaultCluster#address}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description to help identify source (maximum 255 chars).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#description VaultCluster#description}

---

### VaultClusterMajorVersionUpgradeConfig <a name="VaultClusterMajorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultClusterMajorVersionUpgradeConfig {
    string UpgradeType,
    string MaintenanceWindowDay = null,
    string MaintenanceWindowTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.upgradeType">UpgradeType</a></code> | <code>string</code> | The major upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`, `MANUAL`. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowDay">MaintenanceWindowDay</a></code> | <code>string</code> | The maintenance day of the week for scheduled upgrades. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>string</code> | The maintenance time frame for scheduled upgrades. Valid options for maintenance window time - `WINDOW_12AM_4AM`, `WINDOW_6AM_10AM`, `WINDOW_12PM_4PM`, `WINDOW_6PM_10PM`. |

---

##### `UpgradeType`<sup>Required</sup> <a name="UpgradeType" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.upgradeType"></a>

```csharp
public string UpgradeType { get; set; }
```

- *Type:* string

The major upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`, `MANUAL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#upgrade_type VaultCluster#upgrade_type}

---

##### `MaintenanceWindowDay`<sup>Optional</sup> <a name="MaintenanceWindowDay" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowDay"></a>

```csharp
public string MaintenanceWindowDay { get; set; }
```

- *Type:* string

The maintenance day of the week for scheduled upgrades.

Valid options for maintenance window day - `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#maintenance_window_day VaultCluster#maintenance_window_day}

---

##### `MaintenanceWindowTime`<sup>Optional</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowTime"></a>

```csharp
public string MaintenanceWindowTime { get; set; }
```

- *Type:* string

The maintenance time frame for scheduled upgrades. Valid options for maintenance window time - `WINDOW_12AM_4AM`, `WINDOW_6AM_10AM`, `WINDOW_12PM_4PM`, `WINDOW_6PM_10PM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#maintenance_window_time VaultCluster#maintenance_window_time}

---

### VaultClusterMetricsConfig <a name="VaultClusterMetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultClusterMetricsConfig {
    string CloudwatchAccessKeyId = null,
    string CloudwatchRegion = null,
    string CloudwatchSecretAccessKey = null,
    string DatadogApiKey = null,
    string DatadogRegion = null,
    string ElasticsearchEndpoint = null,
    string ElasticsearchPassword = null,
    string ElasticsearchUser = null,
    string GrafanaEndpoint = null,
    string GrafanaPassword = null,
    string GrafanaUser = null,
    string HttpBasicPassword = null,
    string HttpBasicUser = null,
    string HttpBearerToken = null,
    string HttpCodec = null,
    object HttpCompression = null,
    System.Collections.Generic.IDictionary<string, string> HttpHeaders = null,
    string HttpMethod = null,
    string HttpPayloadPrefix = null,
    string HttpPayloadSuffix = null,
    string HttpUri = null,
    string NewrelicAccountId = null,
    string NewrelicLicenseKey = null,
    string NewrelicRegion = null,
    string SplunkHecendpoint = null,
    string SplunkToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.cloudwatchAccessKeyId">CloudwatchAccessKeyId</a></code> | <code>string</code> | CloudWatch access key ID for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.cloudwatchRegion">CloudwatchRegion</a></code> | <code>string</code> | CloudWatch region for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.cloudwatchSecretAccessKey">CloudwatchSecretAccessKey</a></code> | <code>string</code> | CloudWatch secret access key for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogApiKey">DatadogApiKey</a></code> | <code>string</code> | Datadog api key for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogRegion">DatadogRegion</a></code> | <code>string</code> | Datadog region for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.elasticsearchEndpoint">ElasticsearchEndpoint</a></code> | <code>string</code> | ElasticSearch endpoint for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.elasticsearchPassword">ElasticsearchPassword</a></code> | <code>string</code> | ElasticSearch password for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.elasticsearchUser">ElasticsearchUser</a></code> | <code>string</code> | ElasticSearch user for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaEndpoint">GrafanaEndpoint</a></code> | <code>string</code> | Grafana endpoint for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaPassword">GrafanaPassword</a></code> | <code>string</code> | Grafana password for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaUser">GrafanaUser</a></code> | <code>string</code> | Grafana user for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpBasicPassword">HttpBasicPassword</a></code> | <code>string</code> | HTTP basic authentication password for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_user is also specified. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpBasicUser">HttpBasicUser</a></code> | <code>string</code> | HTTP basic authentication username for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_password is also specified. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpBearerToken">HttpBearerToken</a></code> | <code>string</code> | HTTP bearer authentication token for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_user and http_basic_password are not provided. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpCodec">HttpCodec</a></code> | <code>string</code> | HTTP codec for streaming metrics, allowed values are JSON and NDJSON. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpCompression">HttpCompression</a></code> | <code>object</code> | HTTP compression flag for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | HTTP headers for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpMethod">HttpMethod</a></code> | <code>string</code> | HTTP payload method for streaming metrics, allowed values are PATCH, POST, or PUT. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpPayloadPrefix">HttpPayloadPrefix</a></code> | <code>string</code> | HTTP payload prefix for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpPayloadSuffix">HttpPayloadSuffix</a></code> | <code>string</code> | HTTP payload suffix for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpUri">HttpUri</a></code> | <code>string</code> | HTTP URI for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.newrelicAccountId">NewrelicAccountId</a></code> | <code>string</code> | NewRelic Account ID for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.newrelicLicenseKey">NewrelicLicenseKey</a></code> | <code>string</code> | NewRelic license key for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.newrelicRegion">NewrelicRegion</a></code> | <code>string</code> | NewRelic region for streaming metrics, allowed values are "US" and "EU". |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkHecendpoint">SplunkHecendpoint</a></code> | <code>string</code> | Splunk endpoint for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkToken">SplunkToken</a></code> | <code>string</code> | Splunk token for streaming metrics. |

---

##### `CloudwatchAccessKeyId`<sup>Optional</sup> <a name="CloudwatchAccessKeyId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.cloudwatchAccessKeyId"></a>

```csharp
public string CloudwatchAccessKeyId { get; set; }
```

- *Type:* string

CloudWatch access key ID for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#cloudwatch_access_key_id VaultCluster#cloudwatch_access_key_id}

---

##### `CloudwatchRegion`<sup>Optional</sup> <a name="CloudwatchRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.cloudwatchRegion"></a>

```csharp
public string CloudwatchRegion { get; set; }
```

- *Type:* string

CloudWatch region for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#cloudwatch_region VaultCluster#cloudwatch_region}

---

##### `CloudwatchSecretAccessKey`<sup>Optional</sup> <a name="CloudwatchSecretAccessKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.cloudwatchSecretAccessKey"></a>

```csharp
public string CloudwatchSecretAccessKey { get; set; }
```

- *Type:* string

CloudWatch secret access key for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#cloudwatch_secret_access_key VaultCluster#cloudwatch_secret_access_key}

---

##### `DatadogApiKey`<sup>Optional</sup> <a name="DatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogApiKey"></a>

```csharp
public string DatadogApiKey { get; set; }
```

- *Type:* string

Datadog api key for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}

---

##### `DatadogRegion`<sup>Optional</sup> <a name="DatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogRegion"></a>

```csharp
public string DatadogRegion { get; set; }
```

- *Type:* string

Datadog region for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#datadog_region VaultCluster#datadog_region}

---

##### `ElasticsearchEndpoint`<sup>Optional</sup> <a name="ElasticsearchEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.elasticsearchEndpoint"></a>

```csharp
public string ElasticsearchEndpoint { get; set; }
```

- *Type:* string

ElasticSearch endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#elasticsearch_endpoint VaultCluster#elasticsearch_endpoint}

---

##### `ElasticsearchPassword`<sup>Optional</sup> <a name="ElasticsearchPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.elasticsearchPassword"></a>

```csharp
public string ElasticsearchPassword { get; set; }
```

- *Type:* string

ElasticSearch password for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#elasticsearch_password VaultCluster#elasticsearch_password}

---

##### `ElasticsearchUser`<sup>Optional</sup> <a name="ElasticsearchUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.elasticsearchUser"></a>

```csharp
public string ElasticsearchUser { get; set; }
```

- *Type:* string

ElasticSearch user for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#elasticsearch_user VaultCluster#elasticsearch_user}

---

##### `GrafanaEndpoint`<sup>Optional</sup> <a name="GrafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaEndpoint"></a>

```csharp
public string GrafanaEndpoint { get; set; }
```

- *Type:* string

Grafana endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}

---

##### `GrafanaPassword`<sup>Optional</sup> <a name="GrafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaPassword"></a>

```csharp
public string GrafanaPassword { get; set; }
```

- *Type:* string

Grafana password for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#grafana_password VaultCluster#grafana_password}

---

##### `GrafanaUser`<sup>Optional</sup> <a name="GrafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaUser"></a>

```csharp
public string GrafanaUser { get; set; }
```

- *Type:* string

Grafana user for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#grafana_user VaultCluster#grafana_user}

---

##### `HttpBasicPassword`<sup>Optional</sup> <a name="HttpBasicPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpBasicPassword"></a>

```csharp
public string HttpBasicPassword { get; set; }
```

- *Type:* string

HTTP basic authentication password for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_user is also specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_basic_password VaultCluster#http_basic_password}

---

##### `HttpBasicUser`<sup>Optional</sup> <a name="HttpBasicUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpBasicUser"></a>

```csharp
public string HttpBasicUser { get; set; }
```

- *Type:* string

HTTP basic authentication username for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_password is also specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_basic_user VaultCluster#http_basic_user}

---

##### `HttpBearerToken`<sup>Optional</sup> <a name="HttpBearerToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpBearerToken"></a>

```csharp
public string HttpBearerToken { get; set; }
```

- *Type:* string

HTTP bearer authentication token for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_user and http_basic_password are not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_bearer_token VaultCluster#http_bearer_token}

---

##### `HttpCodec`<sup>Optional</sup> <a name="HttpCodec" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpCodec"></a>

```csharp
public string HttpCodec { get; set; }
```

- *Type:* string

HTTP codec for streaming metrics, allowed values are JSON and NDJSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_codec VaultCluster#http_codec}

---

##### `HttpCompression`<sup>Optional</sup> <a name="HttpCompression" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpCompression"></a>

```csharp
public object HttpCompression { get; set; }
```

- *Type:* object

HTTP compression flag for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_compression VaultCluster#http_compression}

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

HTTP headers for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_headers VaultCluster#http_headers}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

HTTP payload method for streaming metrics, allowed values are PATCH, POST, or PUT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_method VaultCluster#http_method}

---

##### `HttpPayloadPrefix`<sup>Optional</sup> <a name="HttpPayloadPrefix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpPayloadPrefix"></a>

```csharp
public string HttpPayloadPrefix { get; set; }
```

- *Type:* string

HTTP payload prefix for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_payload_prefix VaultCluster#http_payload_prefix}

---

##### `HttpPayloadSuffix`<sup>Optional</sup> <a name="HttpPayloadSuffix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpPayloadSuffix"></a>

```csharp
public string HttpPayloadSuffix { get; set; }
```

- *Type:* string

HTTP payload suffix for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_payload_suffix VaultCluster#http_payload_suffix}

---

##### `HttpUri`<sup>Optional</sup> <a name="HttpUri" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpUri"></a>

```csharp
public string HttpUri { get; set; }
```

- *Type:* string

HTTP URI for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#http_uri VaultCluster#http_uri}

---

##### `NewrelicAccountId`<sup>Optional</sup> <a name="NewrelicAccountId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.newrelicAccountId"></a>

```csharp
public string NewrelicAccountId { get; set; }
```

- *Type:* string

NewRelic Account ID for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#newrelic_account_id VaultCluster#newrelic_account_id}

---

##### `NewrelicLicenseKey`<sup>Optional</sup> <a name="NewrelicLicenseKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.newrelicLicenseKey"></a>

```csharp
public string NewrelicLicenseKey { get; set; }
```

- *Type:* string

NewRelic license key for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#newrelic_license_key VaultCluster#newrelic_license_key}

---

##### `NewrelicRegion`<sup>Optional</sup> <a name="NewrelicRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.newrelicRegion"></a>

```csharp
public string NewrelicRegion { get; set; }
```

- *Type:* string

NewRelic region for streaming metrics, allowed values are "US" and "EU".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#newrelic_region VaultCluster#newrelic_region}

---

##### `SplunkHecendpoint`<sup>Optional</sup> <a name="SplunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkHecendpoint"></a>

```csharp
public string SplunkHecendpoint { get; set; }
```

- *Type:* string

Splunk endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}

---

##### `SplunkToken`<sup>Optional</sup> <a name="SplunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkToken"></a>

```csharp
public string SplunkToken { get; set; }
```

- *Type:* string

Splunk token for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#splunk_token VaultCluster#splunk_token}

---

### VaultClusterTimeouts <a name="VaultClusterTimeouts" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultClusterTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#create VaultCluster#create}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#default VaultCluster#default}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#delete VaultCluster#delete}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#update VaultCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#create VaultCluster#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#default VaultCluster#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#delete VaultCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/resources/vault_cluster#update VaultCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VaultClusterAuditLogConfigOutputReference <a name="VaultClusterAuditLogConfigOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultClusterAuditLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetCloudwatchAccessKeyId">ResetCloudwatchAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetCloudwatchRegion">ResetCloudwatchRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetCloudwatchSecretAccessKey">ResetCloudwatchSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogApiKey">ResetDatadogApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogRegion">ResetDatadogRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetElasticsearchEndpoint">ResetElasticsearchEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetElasticsearchPassword">ResetElasticsearchPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetElasticsearchUser">ResetElasticsearchUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaEndpoint">ResetGrafanaEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaPassword">ResetGrafanaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaUser">ResetGrafanaUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpBasicPassword">ResetHttpBasicPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpBasicUser">ResetHttpBasicUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpBearerToken">ResetHttpBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpCodec">ResetHttpCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpCompression">ResetHttpCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpPayloadPrefix">ResetHttpPayloadPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpPayloadSuffix">ResetHttpPayloadSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpUri">ResetHttpUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetNewrelicAccountId">ResetNewrelicAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetNewrelicLicenseKey">ResetNewrelicLicenseKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetNewrelicRegion">ResetNewrelicRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkHecendpoint">ResetSplunkHecendpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkToken">ResetSplunkToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchAccessKeyId` <a name="ResetCloudwatchAccessKeyId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetCloudwatchAccessKeyId"></a>

```csharp
private void ResetCloudwatchAccessKeyId()
```

##### `ResetCloudwatchRegion` <a name="ResetCloudwatchRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetCloudwatchRegion"></a>

```csharp
private void ResetCloudwatchRegion()
```

##### `ResetCloudwatchSecretAccessKey` <a name="ResetCloudwatchSecretAccessKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetCloudwatchSecretAccessKey"></a>

```csharp
private void ResetCloudwatchSecretAccessKey()
```

##### `ResetDatadogApiKey` <a name="ResetDatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogApiKey"></a>

```csharp
private void ResetDatadogApiKey()
```

##### `ResetDatadogRegion` <a name="ResetDatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogRegion"></a>

```csharp
private void ResetDatadogRegion()
```

##### `ResetElasticsearchEndpoint` <a name="ResetElasticsearchEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetElasticsearchEndpoint"></a>

```csharp
private void ResetElasticsearchEndpoint()
```

##### `ResetElasticsearchPassword` <a name="ResetElasticsearchPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetElasticsearchPassword"></a>

```csharp
private void ResetElasticsearchPassword()
```

##### `ResetElasticsearchUser` <a name="ResetElasticsearchUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetElasticsearchUser"></a>

```csharp
private void ResetElasticsearchUser()
```

##### `ResetGrafanaEndpoint` <a name="ResetGrafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaEndpoint"></a>

```csharp
private void ResetGrafanaEndpoint()
```

##### `ResetGrafanaPassword` <a name="ResetGrafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaPassword"></a>

```csharp
private void ResetGrafanaPassword()
```

##### `ResetGrafanaUser` <a name="ResetGrafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaUser"></a>

```csharp
private void ResetGrafanaUser()
```

##### `ResetHttpBasicPassword` <a name="ResetHttpBasicPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpBasicPassword"></a>

```csharp
private void ResetHttpBasicPassword()
```

##### `ResetHttpBasicUser` <a name="ResetHttpBasicUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpBasicUser"></a>

```csharp
private void ResetHttpBasicUser()
```

##### `ResetHttpBearerToken` <a name="ResetHttpBearerToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpBearerToken"></a>

```csharp
private void ResetHttpBearerToken()
```

##### `ResetHttpCodec` <a name="ResetHttpCodec" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpCodec"></a>

```csharp
private void ResetHttpCodec()
```

##### `ResetHttpCompression` <a name="ResetHttpCompression" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpCompression"></a>

```csharp
private void ResetHttpCompression()
```

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpHeaders"></a>

```csharp
private void ResetHttpHeaders()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetHttpPayloadPrefix` <a name="ResetHttpPayloadPrefix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpPayloadPrefix"></a>

```csharp
private void ResetHttpPayloadPrefix()
```

##### `ResetHttpPayloadSuffix` <a name="ResetHttpPayloadSuffix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpPayloadSuffix"></a>

```csharp
private void ResetHttpPayloadSuffix()
```

##### `ResetHttpUri` <a name="ResetHttpUri" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpUri"></a>

```csharp
private void ResetHttpUri()
```

##### `ResetNewrelicAccountId` <a name="ResetNewrelicAccountId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetNewrelicAccountId"></a>

```csharp
private void ResetNewrelicAccountId()
```

##### `ResetNewrelicLicenseKey` <a name="ResetNewrelicLicenseKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetNewrelicLicenseKey"></a>

```csharp
private void ResetNewrelicLicenseKey()
```

##### `ResetNewrelicRegion` <a name="ResetNewrelicRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetNewrelicRegion"></a>

```csharp
private void ResetNewrelicRegion()
```

##### `ResetSplunkHecendpoint` <a name="ResetSplunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkHecendpoint"></a>

```csharp
private void ResetSplunkHecendpoint()
```

##### `ResetSplunkToken` <a name="ResetSplunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkToken"></a>

```csharp
private void ResetSplunkToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchGroupName">CloudwatchGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchStreamName">CloudwatchStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchDataset">ElasticsearchDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchAccessKeyIdInput">CloudwatchAccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchRegionInput">CloudwatchRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchSecretAccessKeyInput">CloudwatchSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKeyInput">DatadogApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegionInput">DatadogRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchEndpointInput">ElasticsearchEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchPasswordInput">ElasticsearchPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchUserInput">ElasticsearchUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpointInput">GrafanaEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPasswordInput">GrafanaPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUserInput">GrafanaUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicPasswordInput">HttpBasicPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicUserInput">HttpBasicUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBearerTokenInput">HttpBearerTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCodecInput">HttpCodecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCompressionInput">HttpCompressionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadPrefixInput">HttpPayloadPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadSuffixInput">HttpPayloadSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpUriInput">HttpUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicAccountIdInput">NewrelicAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicLicenseKeyInput">NewrelicLicenseKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicRegionInput">NewrelicRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpointInput">SplunkHecendpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkTokenInput">SplunkTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchAccessKeyId">CloudwatchAccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchRegion">CloudwatchRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchSecretAccessKey">CloudwatchSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKey">DatadogApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegion">DatadogRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchEndpoint">ElasticsearchEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchPassword">ElasticsearchPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchUser">ElasticsearchUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint">GrafanaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPassword">GrafanaPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUser">GrafanaUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicPassword">HttpBasicPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicUser">HttpBasicUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBearerToken">HttpBearerToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCodec">HttpCodec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCompression">HttpCompression</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadPrefix">HttpPayloadPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadSuffix">HttpPayloadSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpUri">HttpUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicAccountId">NewrelicAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicLicenseKey">NewrelicLicenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicRegion">NewrelicRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint">SplunkHecendpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkToken">SplunkToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchGroupName`<sup>Required</sup> <a name="CloudwatchGroupName" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchGroupName"></a>

```csharp
public string CloudwatchGroupName { get; }
```

- *Type:* string

---

##### `CloudwatchStreamName`<sup>Required</sup> <a name="CloudwatchStreamName" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchStreamName"></a>

```csharp
public string CloudwatchStreamName { get; }
```

- *Type:* string

---

##### `ElasticsearchDataset`<sup>Required</sup> <a name="ElasticsearchDataset" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchDataset"></a>

```csharp
public string ElasticsearchDataset { get; }
```

- *Type:* string

---

##### `CloudwatchAccessKeyIdInput`<sup>Optional</sup> <a name="CloudwatchAccessKeyIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchAccessKeyIdInput"></a>

```csharp
public string CloudwatchAccessKeyIdInput { get; }
```

- *Type:* string

---

##### `CloudwatchRegionInput`<sup>Optional</sup> <a name="CloudwatchRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchRegionInput"></a>

```csharp
public string CloudwatchRegionInput { get; }
```

- *Type:* string

---

##### `CloudwatchSecretAccessKeyInput`<sup>Optional</sup> <a name="CloudwatchSecretAccessKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchSecretAccessKeyInput"></a>

```csharp
public string CloudwatchSecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `DatadogApiKeyInput`<sup>Optional</sup> <a name="DatadogApiKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKeyInput"></a>

```csharp
public string DatadogApiKeyInput { get; }
```

- *Type:* string

---

##### `DatadogRegionInput`<sup>Optional</sup> <a name="DatadogRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegionInput"></a>

```csharp
public string DatadogRegionInput { get; }
```

- *Type:* string

---

##### `ElasticsearchEndpointInput`<sup>Optional</sup> <a name="ElasticsearchEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchEndpointInput"></a>

```csharp
public string ElasticsearchEndpointInput { get; }
```

- *Type:* string

---

##### `ElasticsearchPasswordInput`<sup>Optional</sup> <a name="ElasticsearchPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchPasswordInput"></a>

```csharp
public string ElasticsearchPasswordInput { get; }
```

- *Type:* string

---

##### `ElasticsearchUserInput`<sup>Optional</sup> <a name="ElasticsearchUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchUserInput"></a>

```csharp
public string ElasticsearchUserInput { get; }
```

- *Type:* string

---

##### `GrafanaEndpointInput`<sup>Optional</sup> <a name="GrafanaEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpointInput"></a>

```csharp
public string GrafanaEndpointInput { get; }
```

- *Type:* string

---

##### `GrafanaPasswordInput`<sup>Optional</sup> <a name="GrafanaPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPasswordInput"></a>

```csharp
public string GrafanaPasswordInput { get; }
```

- *Type:* string

---

##### `GrafanaUserInput`<sup>Optional</sup> <a name="GrafanaUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUserInput"></a>

```csharp
public string GrafanaUserInput { get; }
```

- *Type:* string

---

##### `HttpBasicPasswordInput`<sup>Optional</sup> <a name="HttpBasicPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicPasswordInput"></a>

```csharp
public string HttpBasicPasswordInput { get; }
```

- *Type:* string

---

##### `HttpBasicUserInput`<sup>Optional</sup> <a name="HttpBasicUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicUserInput"></a>

```csharp
public string HttpBasicUserInput { get; }
```

- *Type:* string

---

##### `HttpBearerTokenInput`<sup>Optional</sup> <a name="HttpBearerTokenInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBearerTokenInput"></a>

```csharp
public string HttpBearerTokenInput { get; }
```

- *Type:* string

---

##### `HttpCodecInput`<sup>Optional</sup> <a name="HttpCodecInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCodecInput"></a>

```csharp
public string HttpCodecInput { get; }
```

- *Type:* string

---

##### `HttpCompressionInput`<sup>Optional</sup> <a name="HttpCompressionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCompressionInput"></a>

```csharp
public object HttpCompressionInput { get; }
```

- *Type:* object

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `HttpPayloadPrefixInput`<sup>Optional</sup> <a name="HttpPayloadPrefixInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadPrefixInput"></a>

```csharp
public string HttpPayloadPrefixInput { get; }
```

- *Type:* string

---

##### `HttpPayloadSuffixInput`<sup>Optional</sup> <a name="HttpPayloadSuffixInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadSuffixInput"></a>

```csharp
public string HttpPayloadSuffixInput { get; }
```

- *Type:* string

---

##### `HttpUriInput`<sup>Optional</sup> <a name="HttpUriInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpUriInput"></a>

```csharp
public string HttpUriInput { get; }
```

- *Type:* string

---

##### `NewrelicAccountIdInput`<sup>Optional</sup> <a name="NewrelicAccountIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicAccountIdInput"></a>

```csharp
public string NewrelicAccountIdInput { get; }
```

- *Type:* string

---

##### `NewrelicLicenseKeyInput`<sup>Optional</sup> <a name="NewrelicLicenseKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicLicenseKeyInput"></a>

```csharp
public string NewrelicLicenseKeyInput { get; }
```

- *Type:* string

---

##### `NewrelicRegionInput`<sup>Optional</sup> <a name="NewrelicRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicRegionInput"></a>

```csharp
public string NewrelicRegionInput { get; }
```

- *Type:* string

---

##### `SplunkHecendpointInput`<sup>Optional</sup> <a name="SplunkHecendpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpointInput"></a>

```csharp
public string SplunkHecendpointInput { get; }
```

- *Type:* string

---

##### `SplunkTokenInput`<sup>Optional</sup> <a name="SplunkTokenInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkTokenInput"></a>

```csharp
public string SplunkTokenInput { get; }
```

- *Type:* string

---

##### `CloudwatchAccessKeyId`<sup>Required</sup> <a name="CloudwatchAccessKeyId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchAccessKeyId"></a>

```csharp
public string CloudwatchAccessKeyId { get; }
```

- *Type:* string

---

##### `CloudwatchRegion`<sup>Required</sup> <a name="CloudwatchRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchRegion"></a>

```csharp
public string CloudwatchRegion { get; }
```

- *Type:* string

---

##### `CloudwatchSecretAccessKey`<sup>Required</sup> <a name="CloudwatchSecretAccessKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchSecretAccessKey"></a>

```csharp
public string CloudwatchSecretAccessKey { get; }
```

- *Type:* string

---

##### `DatadogApiKey`<sup>Required</sup> <a name="DatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKey"></a>

```csharp
public string DatadogApiKey { get; }
```

- *Type:* string

---

##### `DatadogRegion`<sup>Required</sup> <a name="DatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegion"></a>

```csharp
public string DatadogRegion { get; }
```

- *Type:* string

---

##### `ElasticsearchEndpoint`<sup>Required</sup> <a name="ElasticsearchEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchEndpoint"></a>

```csharp
public string ElasticsearchEndpoint { get; }
```

- *Type:* string

---

##### `ElasticsearchPassword`<sup>Required</sup> <a name="ElasticsearchPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchPassword"></a>

```csharp
public string ElasticsearchPassword { get; }
```

- *Type:* string

---

##### `ElasticsearchUser`<sup>Required</sup> <a name="ElasticsearchUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchUser"></a>

```csharp
public string ElasticsearchUser { get; }
```

- *Type:* string

---

##### `GrafanaEndpoint`<sup>Required</sup> <a name="GrafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint"></a>

```csharp
public string GrafanaEndpoint { get; }
```

- *Type:* string

---

##### `GrafanaPassword`<sup>Required</sup> <a name="GrafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPassword"></a>

```csharp
public string GrafanaPassword { get; }
```

- *Type:* string

---

##### `GrafanaUser`<sup>Required</sup> <a name="GrafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUser"></a>

```csharp
public string GrafanaUser { get; }
```

- *Type:* string

---

##### `HttpBasicPassword`<sup>Required</sup> <a name="HttpBasicPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicPassword"></a>

```csharp
public string HttpBasicPassword { get; }
```

- *Type:* string

---

##### `HttpBasicUser`<sup>Required</sup> <a name="HttpBasicUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicUser"></a>

```csharp
public string HttpBasicUser { get; }
```

- *Type:* string

---

##### `HttpBearerToken`<sup>Required</sup> <a name="HttpBearerToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBearerToken"></a>

```csharp
public string HttpBearerToken { get; }
```

- *Type:* string

---

##### `HttpCodec`<sup>Required</sup> <a name="HttpCodec" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCodec"></a>

```csharp
public string HttpCodec { get; }
```

- *Type:* string

---

##### `HttpCompression`<sup>Required</sup> <a name="HttpCompression" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCompression"></a>

```csharp
public object HttpCompression { get; }
```

- *Type:* object

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `HttpPayloadPrefix`<sup>Required</sup> <a name="HttpPayloadPrefix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadPrefix"></a>

```csharp
public string HttpPayloadPrefix { get; }
```

- *Type:* string

---

##### `HttpPayloadSuffix`<sup>Required</sup> <a name="HttpPayloadSuffix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadSuffix"></a>

```csharp
public string HttpPayloadSuffix { get; }
```

- *Type:* string

---

##### `HttpUri`<sup>Required</sup> <a name="HttpUri" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpUri"></a>

```csharp
public string HttpUri { get; }
```

- *Type:* string

---

##### `NewrelicAccountId`<sup>Required</sup> <a name="NewrelicAccountId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicAccountId"></a>

```csharp
public string NewrelicAccountId { get; }
```

- *Type:* string

---

##### `NewrelicLicenseKey`<sup>Required</sup> <a name="NewrelicLicenseKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicLicenseKey"></a>

```csharp
public string NewrelicLicenseKey { get; }
```

- *Type:* string

---

##### `NewrelicRegion`<sup>Required</sup> <a name="NewrelicRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicRegion"></a>

```csharp
public string NewrelicRegion { get; }
```

- *Type:* string

---

##### `SplunkHecendpoint`<sup>Required</sup> <a name="SplunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint"></a>

```csharp
public string SplunkHecendpoint { get; }
```

- *Type:* string

---

##### `SplunkToken`<sup>Required</sup> <a name="SplunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkToken"></a>

```csharp
public string SplunkToken { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.internalValue"></a>

```csharp
public VaultClusterAuditLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

---


### VaultClusterIpAllowlistStructList <a name="VaultClusterIpAllowlistStructList" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultClusterIpAllowlistStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.get"></a>

```csharp
private VaultClusterIpAllowlistStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultClusterIpAllowlistStructOutputReference <a name="VaultClusterIpAllowlistStructOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultClusterIpAllowlistStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultClusterMajorVersionUpgradeConfigOutputReference <a name="VaultClusterMajorVersionUpgradeConfigOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultClusterMajorVersionUpgradeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowDay">ResetMaintenanceWindowDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowTime">ResetMaintenanceWindowTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaintenanceWindowDay` <a name="ResetMaintenanceWindowDay" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowDay"></a>

```csharp
private void ResetMaintenanceWindowDay()
```

##### `ResetMaintenanceWindowTime` <a name="ResetMaintenanceWindowTime" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowTime"></a>

```csharp
private void ResetMaintenanceWindowTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDayInput">MaintenanceWindowDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTimeInput">MaintenanceWindowTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeTypeInput">UpgradeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay">MaintenanceWindowDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType">UpgradeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaintenanceWindowDayInput`<sup>Optional</sup> <a name="MaintenanceWindowDayInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDayInput"></a>

```csharp
public string MaintenanceWindowDayInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowTimeInput`<sup>Optional</sup> <a name="MaintenanceWindowTimeInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTimeInput"></a>

```csharp
public string MaintenanceWindowTimeInput { get; }
```

- *Type:* string

---

##### `UpgradeTypeInput`<sup>Optional</sup> <a name="UpgradeTypeInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeTypeInput"></a>

```csharp
public string UpgradeTypeInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowDay`<sup>Required</sup> <a name="MaintenanceWindowDay" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay"></a>

```csharp
public string MaintenanceWindowDay { get; }
```

- *Type:* string

---

##### `MaintenanceWindowTime`<sup>Required</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime"></a>

```csharp
public string MaintenanceWindowTime { get; }
```

- *Type:* string

---

##### `UpgradeType`<sup>Required</sup> <a name="UpgradeType" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType"></a>

```csharp
public string UpgradeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue"></a>

```csharp
public VaultClusterMajorVersionUpgradeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

---


### VaultClusterMetricsConfigOutputReference <a name="VaultClusterMetricsConfigOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultClusterMetricsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetCloudwatchAccessKeyId">ResetCloudwatchAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetCloudwatchRegion">ResetCloudwatchRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetCloudwatchSecretAccessKey">ResetCloudwatchSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogApiKey">ResetDatadogApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogRegion">ResetDatadogRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetElasticsearchEndpoint">ResetElasticsearchEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetElasticsearchPassword">ResetElasticsearchPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetElasticsearchUser">ResetElasticsearchUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaEndpoint">ResetGrafanaEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaPassword">ResetGrafanaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaUser">ResetGrafanaUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpBasicPassword">ResetHttpBasicPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpBasicUser">ResetHttpBasicUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpBearerToken">ResetHttpBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpCodec">ResetHttpCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpCompression">ResetHttpCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpPayloadPrefix">ResetHttpPayloadPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpPayloadSuffix">ResetHttpPayloadSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpUri">ResetHttpUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetNewrelicAccountId">ResetNewrelicAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetNewrelicLicenseKey">ResetNewrelicLicenseKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetNewrelicRegion">ResetNewrelicRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkHecendpoint">ResetSplunkHecendpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkToken">ResetSplunkToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchAccessKeyId` <a name="ResetCloudwatchAccessKeyId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetCloudwatchAccessKeyId"></a>

```csharp
private void ResetCloudwatchAccessKeyId()
```

##### `ResetCloudwatchRegion` <a name="ResetCloudwatchRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetCloudwatchRegion"></a>

```csharp
private void ResetCloudwatchRegion()
```

##### `ResetCloudwatchSecretAccessKey` <a name="ResetCloudwatchSecretAccessKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetCloudwatchSecretAccessKey"></a>

```csharp
private void ResetCloudwatchSecretAccessKey()
```

##### `ResetDatadogApiKey` <a name="ResetDatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogApiKey"></a>

```csharp
private void ResetDatadogApiKey()
```

##### `ResetDatadogRegion` <a name="ResetDatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogRegion"></a>

```csharp
private void ResetDatadogRegion()
```

##### `ResetElasticsearchEndpoint` <a name="ResetElasticsearchEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetElasticsearchEndpoint"></a>

```csharp
private void ResetElasticsearchEndpoint()
```

##### `ResetElasticsearchPassword` <a name="ResetElasticsearchPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetElasticsearchPassword"></a>

```csharp
private void ResetElasticsearchPassword()
```

##### `ResetElasticsearchUser` <a name="ResetElasticsearchUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetElasticsearchUser"></a>

```csharp
private void ResetElasticsearchUser()
```

##### `ResetGrafanaEndpoint` <a name="ResetGrafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaEndpoint"></a>

```csharp
private void ResetGrafanaEndpoint()
```

##### `ResetGrafanaPassword` <a name="ResetGrafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaPassword"></a>

```csharp
private void ResetGrafanaPassword()
```

##### `ResetGrafanaUser` <a name="ResetGrafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaUser"></a>

```csharp
private void ResetGrafanaUser()
```

##### `ResetHttpBasicPassword` <a name="ResetHttpBasicPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpBasicPassword"></a>

```csharp
private void ResetHttpBasicPassword()
```

##### `ResetHttpBasicUser` <a name="ResetHttpBasicUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpBasicUser"></a>

```csharp
private void ResetHttpBasicUser()
```

##### `ResetHttpBearerToken` <a name="ResetHttpBearerToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpBearerToken"></a>

```csharp
private void ResetHttpBearerToken()
```

##### `ResetHttpCodec` <a name="ResetHttpCodec" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpCodec"></a>

```csharp
private void ResetHttpCodec()
```

##### `ResetHttpCompression` <a name="ResetHttpCompression" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpCompression"></a>

```csharp
private void ResetHttpCompression()
```

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpHeaders"></a>

```csharp
private void ResetHttpHeaders()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetHttpPayloadPrefix` <a name="ResetHttpPayloadPrefix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpPayloadPrefix"></a>

```csharp
private void ResetHttpPayloadPrefix()
```

##### `ResetHttpPayloadSuffix` <a name="ResetHttpPayloadSuffix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpPayloadSuffix"></a>

```csharp
private void ResetHttpPayloadSuffix()
```

##### `ResetHttpUri` <a name="ResetHttpUri" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpUri"></a>

```csharp
private void ResetHttpUri()
```

##### `ResetNewrelicAccountId` <a name="ResetNewrelicAccountId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetNewrelicAccountId"></a>

```csharp
private void ResetNewrelicAccountId()
```

##### `ResetNewrelicLicenseKey` <a name="ResetNewrelicLicenseKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetNewrelicLicenseKey"></a>

```csharp
private void ResetNewrelicLicenseKey()
```

##### `ResetNewrelicRegion` <a name="ResetNewrelicRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetNewrelicRegion"></a>

```csharp
private void ResetNewrelicRegion()
```

##### `ResetSplunkHecendpoint` <a name="ResetSplunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkHecendpoint"></a>

```csharp
private void ResetSplunkHecendpoint()
```

##### `ResetSplunkToken` <a name="ResetSplunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkToken"></a>

```csharp
private void ResetSplunkToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchNamespace">CloudwatchNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchDataset">ElasticsearchDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchAccessKeyIdInput">CloudwatchAccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchRegionInput">CloudwatchRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchSecretAccessKeyInput">CloudwatchSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKeyInput">DatadogApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegionInput">DatadogRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchEndpointInput">ElasticsearchEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchPasswordInput">ElasticsearchPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchUserInput">ElasticsearchUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpointInput">GrafanaEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPasswordInput">GrafanaPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUserInput">GrafanaUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicPasswordInput">HttpBasicPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicUserInput">HttpBasicUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBearerTokenInput">HttpBearerTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCodecInput">HttpCodecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCompressionInput">HttpCompressionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadPrefixInput">HttpPayloadPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadSuffixInput">HttpPayloadSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpUriInput">HttpUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicAccountIdInput">NewrelicAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicLicenseKeyInput">NewrelicLicenseKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicRegionInput">NewrelicRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpointInput">SplunkHecendpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkTokenInput">SplunkTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchAccessKeyId">CloudwatchAccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchRegion">CloudwatchRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchSecretAccessKey">CloudwatchSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKey">DatadogApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegion">DatadogRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchEndpoint">ElasticsearchEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchPassword">ElasticsearchPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchUser">ElasticsearchUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpoint">GrafanaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPassword">GrafanaPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUser">GrafanaUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicPassword">HttpBasicPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicUser">HttpBasicUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBearerToken">HttpBearerToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCodec">HttpCodec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCompression">HttpCompression</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadPrefix">HttpPayloadPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadSuffix">HttpPayloadSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpUri">HttpUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicAccountId">NewrelicAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicLicenseKey">NewrelicLicenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicRegion">NewrelicRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpoint">SplunkHecendpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkToken">SplunkToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchNamespace`<sup>Required</sup> <a name="CloudwatchNamespace" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchNamespace"></a>

```csharp
public string CloudwatchNamespace { get; }
```

- *Type:* string

---

##### `ElasticsearchDataset`<sup>Required</sup> <a name="ElasticsearchDataset" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchDataset"></a>

```csharp
public string ElasticsearchDataset { get; }
```

- *Type:* string

---

##### `CloudwatchAccessKeyIdInput`<sup>Optional</sup> <a name="CloudwatchAccessKeyIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchAccessKeyIdInput"></a>

```csharp
public string CloudwatchAccessKeyIdInput { get; }
```

- *Type:* string

---

##### `CloudwatchRegionInput`<sup>Optional</sup> <a name="CloudwatchRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchRegionInput"></a>

```csharp
public string CloudwatchRegionInput { get; }
```

- *Type:* string

---

##### `CloudwatchSecretAccessKeyInput`<sup>Optional</sup> <a name="CloudwatchSecretAccessKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchSecretAccessKeyInput"></a>

```csharp
public string CloudwatchSecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `DatadogApiKeyInput`<sup>Optional</sup> <a name="DatadogApiKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKeyInput"></a>

```csharp
public string DatadogApiKeyInput { get; }
```

- *Type:* string

---

##### `DatadogRegionInput`<sup>Optional</sup> <a name="DatadogRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegionInput"></a>

```csharp
public string DatadogRegionInput { get; }
```

- *Type:* string

---

##### `ElasticsearchEndpointInput`<sup>Optional</sup> <a name="ElasticsearchEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchEndpointInput"></a>

```csharp
public string ElasticsearchEndpointInput { get; }
```

- *Type:* string

---

##### `ElasticsearchPasswordInput`<sup>Optional</sup> <a name="ElasticsearchPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchPasswordInput"></a>

```csharp
public string ElasticsearchPasswordInput { get; }
```

- *Type:* string

---

##### `ElasticsearchUserInput`<sup>Optional</sup> <a name="ElasticsearchUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchUserInput"></a>

```csharp
public string ElasticsearchUserInput { get; }
```

- *Type:* string

---

##### `GrafanaEndpointInput`<sup>Optional</sup> <a name="GrafanaEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpointInput"></a>

```csharp
public string GrafanaEndpointInput { get; }
```

- *Type:* string

---

##### `GrafanaPasswordInput`<sup>Optional</sup> <a name="GrafanaPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPasswordInput"></a>

```csharp
public string GrafanaPasswordInput { get; }
```

- *Type:* string

---

##### `GrafanaUserInput`<sup>Optional</sup> <a name="GrafanaUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUserInput"></a>

```csharp
public string GrafanaUserInput { get; }
```

- *Type:* string

---

##### `HttpBasicPasswordInput`<sup>Optional</sup> <a name="HttpBasicPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicPasswordInput"></a>

```csharp
public string HttpBasicPasswordInput { get; }
```

- *Type:* string

---

##### `HttpBasicUserInput`<sup>Optional</sup> <a name="HttpBasicUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicUserInput"></a>

```csharp
public string HttpBasicUserInput { get; }
```

- *Type:* string

---

##### `HttpBearerTokenInput`<sup>Optional</sup> <a name="HttpBearerTokenInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBearerTokenInput"></a>

```csharp
public string HttpBearerTokenInput { get; }
```

- *Type:* string

---

##### `HttpCodecInput`<sup>Optional</sup> <a name="HttpCodecInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCodecInput"></a>

```csharp
public string HttpCodecInput { get; }
```

- *Type:* string

---

##### `HttpCompressionInput`<sup>Optional</sup> <a name="HttpCompressionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCompressionInput"></a>

```csharp
public object HttpCompressionInput { get; }
```

- *Type:* object

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `HttpPayloadPrefixInput`<sup>Optional</sup> <a name="HttpPayloadPrefixInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadPrefixInput"></a>

```csharp
public string HttpPayloadPrefixInput { get; }
```

- *Type:* string

---

##### `HttpPayloadSuffixInput`<sup>Optional</sup> <a name="HttpPayloadSuffixInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadSuffixInput"></a>

```csharp
public string HttpPayloadSuffixInput { get; }
```

- *Type:* string

---

##### `HttpUriInput`<sup>Optional</sup> <a name="HttpUriInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpUriInput"></a>

```csharp
public string HttpUriInput { get; }
```

- *Type:* string

---

##### `NewrelicAccountIdInput`<sup>Optional</sup> <a name="NewrelicAccountIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicAccountIdInput"></a>

```csharp
public string NewrelicAccountIdInput { get; }
```

- *Type:* string

---

##### `NewrelicLicenseKeyInput`<sup>Optional</sup> <a name="NewrelicLicenseKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicLicenseKeyInput"></a>

```csharp
public string NewrelicLicenseKeyInput { get; }
```

- *Type:* string

---

##### `NewrelicRegionInput`<sup>Optional</sup> <a name="NewrelicRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicRegionInput"></a>

```csharp
public string NewrelicRegionInput { get; }
```

- *Type:* string

---

##### `SplunkHecendpointInput`<sup>Optional</sup> <a name="SplunkHecendpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpointInput"></a>

```csharp
public string SplunkHecendpointInput { get; }
```

- *Type:* string

---

##### `SplunkTokenInput`<sup>Optional</sup> <a name="SplunkTokenInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkTokenInput"></a>

```csharp
public string SplunkTokenInput { get; }
```

- *Type:* string

---

##### `CloudwatchAccessKeyId`<sup>Required</sup> <a name="CloudwatchAccessKeyId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchAccessKeyId"></a>

```csharp
public string CloudwatchAccessKeyId { get; }
```

- *Type:* string

---

##### `CloudwatchRegion`<sup>Required</sup> <a name="CloudwatchRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchRegion"></a>

```csharp
public string CloudwatchRegion { get; }
```

- *Type:* string

---

##### `CloudwatchSecretAccessKey`<sup>Required</sup> <a name="CloudwatchSecretAccessKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchSecretAccessKey"></a>

```csharp
public string CloudwatchSecretAccessKey { get; }
```

- *Type:* string

---

##### `DatadogApiKey`<sup>Required</sup> <a name="DatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKey"></a>

```csharp
public string DatadogApiKey { get; }
```

- *Type:* string

---

##### `DatadogRegion`<sup>Required</sup> <a name="DatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegion"></a>

```csharp
public string DatadogRegion { get; }
```

- *Type:* string

---

##### `ElasticsearchEndpoint`<sup>Required</sup> <a name="ElasticsearchEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchEndpoint"></a>

```csharp
public string ElasticsearchEndpoint { get; }
```

- *Type:* string

---

##### `ElasticsearchPassword`<sup>Required</sup> <a name="ElasticsearchPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchPassword"></a>

```csharp
public string ElasticsearchPassword { get; }
```

- *Type:* string

---

##### `ElasticsearchUser`<sup>Required</sup> <a name="ElasticsearchUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchUser"></a>

```csharp
public string ElasticsearchUser { get; }
```

- *Type:* string

---

##### `GrafanaEndpoint`<sup>Required</sup> <a name="GrafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpoint"></a>

```csharp
public string GrafanaEndpoint { get; }
```

- *Type:* string

---

##### `GrafanaPassword`<sup>Required</sup> <a name="GrafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPassword"></a>

```csharp
public string GrafanaPassword { get; }
```

- *Type:* string

---

##### `GrafanaUser`<sup>Required</sup> <a name="GrafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUser"></a>

```csharp
public string GrafanaUser { get; }
```

- *Type:* string

---

##### `HttpBasicPassword`<sup>Required</sup> <a name="HttpBasicPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicPassword"></a>

```csharp
public string HttpBasicPassword { get; }
```

- *Type:* string

---

##### `HttpBasicUser`<sup>Required</sup> <a name="HttpBasicUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicUser"></a>

```csharp
public string HttpBasicUser { get; }
```

- *Type:* string

---

##### `HttpBearerToken`<sup>Required</sup> <a name="HttpBearerToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBearerToken"></a>

```csharp
public string HttpBearerToken { get; }
```

- *Type:* string

---

##### `HttpCodec`<sup>Required</sup> <a name="HttpCodec" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCodec"></a>

```csharp
public string HttpCodec { get; }
```

- *Type:* string

---

##### `HttpCompression`<sup>Required</sup> <a name="HttpCompression" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCompression"></a>

```csharp
public object HttpCompression { get; }
```

- *Type:* object

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `HttpPayloadPrefix`<sup>Required</sup> <a name="HttpPayloadPrefix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadPrefix"></a>

```csharp
public string HttpPayloadPrefix { get; }
```

- *Type:* string

---

##### `HttpPayloadSuffix`<sup>Required</sup> <a name="HttpPayloadSuffix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadSuffix"></a>

```csharp
public string HttpPayloadSuffix { get; }
```

- *Type:* string

---

##### `HttpUri`<sup>Required</sup> <a name="HttpUri" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpUri"></a>

```csharp
public string HttpUri { get; }
```

- *Type:* string

---

##### `NewrelicAccountId`<sup>Required</sup> <a name="NewrelicAccountId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicAccountId"></a>

```csharp
public string NewrelicAccountId { get; }
```

- *Type:* string

---

##### `NewrelicLicenseKey`<sup>Required</sup> <a name="NewrelicLicenseKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicLicenseKey"></a>

```csharp
public string NewrelicLicenseKey { get; }
```

- *Type:* string

---

##### `NewrelicRegion`<sup>Required</sup> <a name="NewrelicRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicRegion"></a>

```csharp
public string NewrelicRegion { get; }
```

- *Type:* string

---

##### `SplunkHecendpoint`<sup>Required</sup> <a name="SplunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpoint"></a>

```csharp
public string SplunkHecendpoint { get; }
```

- *Type:* string

---

##### `SplunkToken`<sup>Required</sup> <a name="SplunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkToken"></a>

```csharp
public string SplunkToken { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.internalValue"></a>

```csharp
public VaultClusterMetricsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

---


### VaultClusterTimeoutsOutputReference <a name="VaultClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



