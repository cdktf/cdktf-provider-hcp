# `hcp_vault_cluster`

Refer to the Terraform Registory for docs: [`hcp_vault_cluster`](https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster).

# `vaultCluster` Submodule <a name="`vaultCluster` Submodule" id="@cdktf/provider-hcp.vaultCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultCluster <a name="VaultCluster" id="@cdktf/provider-hcp.vaultCluster.VaultCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster hcp_vault_cluster}.

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
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig">PutAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig">PutMajorVersionUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig">PutMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetAuditLogConfig">ResetAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMajorVersionUpgradeConfig">ResetMajorVersionUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMetricsConfig">ResetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMinVaultVersion">ResetMinVaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPathsFilter">ResetPathsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPrimaryLink">ResetPrimaryLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetProjectId">ResetProjectId</a></code> | *No description.* |
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

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

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

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAuditLogConfig` <a name="PutAuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig"></a>

```csharp
private void PutAuditLogConfig(VaultClusterAuditLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

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
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfig">MajorVersionUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference">VaultClusterMajorVersionUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference">VaultClusterMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference">VaultClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPrivateEndpointUrl">VaultPrivateEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPublicEndpointUrl">VaultPublicEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultVersion">VaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfigInput">AuditLogConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnIdInput">HvnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfigInput">MajorVersionUpgradeConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfigInput">MetricsConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersionInput">MinVaultVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilterInput">PathsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLinkInput">PrimaryLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
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
    string DatadogApiKey = null,
    string DatadogRegion = null,
    string GrafanaEndpoint = null,
    string GrafanaPassword = null,
    string GrafanaUser = null,
    string SplunkHecendpoint = null,
    string SplunkToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogApiKey">DatadogApiKey</a></code> | <code>string</code> | Datadog api key for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogRegion">DatadogRegion</a></code> | <code>string</code> | Datadog region for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaEndpoint">GrafanaEndpoint</a></code> | <code>string</code> | Grafana endpoint for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaPassword">GrafanaPassword</a></code> | <code>string</code> | Grafana password for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaUser">GrafanaUser</a></code> | <code>string</code> | Grafana user for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkHecendpoint">SplunkHecendpoint</a></code> | <code>string</code> | Splunk endpoint for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkToken">SplunkToken</a></code> | <code>string</code> | Splunk token for streaming audit logs. |

---

##### `DatadogApiKey`<sup>Optional</sup> <a name="DatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogApiKey"></a>

```csharp
public string DatadogApiKey { get; set; }
```

- *Type:* string

Datadog api key for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}

---

##### `DatadogRegion`<sup>Optional</sup> <a name="DatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogRegion"></a>

```csharp
public string DatadogRegion { get; set; }
```

- *Type:* string

Datadog region for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#datadog_region VaultCluster#datadog_region}

---

##### `GrafanaEndpoint`<sup>Optional</sup> <a name="GrafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaEndpoint"></a>

```csharp
public string GrafanaEndpoint { get; set; }
```

- *Type:* string

Grafana endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}

---

##### `GrafanaPassword`<sup>Optional</sup> <a name="GrafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaPassword"></a>

```csharp
public string GrafanaPassword { get; set; }
```

- *Type:* string

Grafana password for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#grafana_password VaultCluster#grafana_password}

---

##### `GrafanaUser`<sup>Optional</sup> <a name="GrafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaUser"></a>

```csharp
public string GrafanaUser { get; set; }
```

- *Type:* string

Grafana user for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#grafana_user VaultCluster#grafana_user}

---

##### `SplunkHecendpoint`<sup>Optional</sup> <a name="SplunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkHecendpoint"></a>

```csharp
public string SplunkHecendpoint { get; set; }
```

- *Type:* string

Splunk endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}

---

##### `SplunkToken`<sup>Optional</sup> <a name="SplunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkToken"></a>

```csharp
public string SplunkToken { get; set; }
```

- *Type:* string

Splunk token for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#splunk_token VaultCluster#splunk_token}

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
    VaultClusterMajorVersionUpgradeConfig MajorVersionUpgradeConfig = null,
    VaultClusterMetricsConfig MetricsConfig = null,
    string MinVaultVersion = null,
    string[] PathsFilter = null,
    string PrimaryLink = null,
    string ProjectId = null,
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
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#id VaultCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.majorVersionUpgradeConfig">MajorVersionUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | major_version_upgrade_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.minVaultVersion">MinVaultVersion</a></code> | <code>string</code> | The minimum Vault version to use when creating the cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.pathsFilter">PathsFilter</a></code> | <code>string[]</code> | The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.primaryLink">PrimaryLink</a></code> | <code>string</code> | The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where the Vault cluster is located. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#cluster_id VaultCluster#cluster_id}

---

##### `HvnId`<sup>Required</sup> <a name="HvnId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.hvnId"></a>

```csharp
public string HvnId { get; set; }
```

- *Type:* string

The ID of the HVN this HCP Vault cluster is associated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#hvn_id VaultCluster#hvn_id}

---

##### `AuditLogConfig`<sup>Optional</sup> <a name="AuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.auditLogConfig"></a>

```csharp
public VaultClusterAuditLogConfig AuditLogConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#audit_log_config VaultCluster#audit_log_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#id VaultCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MajorVersionUpgradeConfig`<sup>Optional</sup> <a name="MajorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.majorVersionUpgradeConfig"></a>

```csharp
public VaultClusterMajorVersionUpgradeConfig MajorVersionUpgradeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

major_version_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#major_version_upgrade_config VaultCluster#major_version_upgrade_config}

---

##### `MetricsConfig`<sup>Optional</sup> <a name="MetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.metricsConfig"></a>

```csharp
public VaultClusterMetricsConfig MetricsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#metrics_config VaultCluster#metrics_config}

---

##### `MinVaultVersion`<sup>Optional</sup> <a name="MinVaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.minVaultVersion"></a>

```csharp
public string MinVaultVersion { get; set; }
```

- *Type:* string

The minimum Vault version to use when creating the cluster.

If not specified, it is defaulted to the version that is currently recommended by HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#min_vault_version VaultCluster#min_vault_version}

---

##### `PathsFilter`<sup>Optional</sup> <a name="PathsFilter" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.pathsFilter"></a>

```csharp
public string[] PathsFilter { get; set; }
```

- *Type:* string[]

The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#paths_filter VaultCluster#paths_filter}

---

##### `PrimaryLink`<sup>Optional</sup> <a name="PrimaryLink" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.primaryLink"></a>

```csharp
public string PrimaryLink { get; set; }
```

- *Type:* string

The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster.

If not specified, it is a standalone Plus tier HCP Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#primary_link VaultCluster#primary_link}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where the Vault cluster is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#project_id VaultCluster#project_id}

---

##### `PublicEndpoint`<sup>Optional</sup> <a name="PublicEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.publicEndpoint"></a>

```csharp
public object PublicEndpoint { get; set; }
```

- *Type:* object

Denotes that the cluster has a public endpoint. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#public_endpoint VaultCluster#public_endpoint}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

Tier of the HCP Vault cluster.

Valid options for tiers - `dev`, `starter_small`, `standard_small`, `standard_medium`, `standard_large`, `plus_small`, `plus_medium`, `plus_large`. See [pricing information](https://www.hashicorp.com/products/vault/pricing). Changing a cluster's size or tier is only available to admins. See [Scale a cluster](https://registry.terraform.io/providers/hashicorp/hcp/latest/docs/guides/vault-scaling).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#tier VaultCluster#tier}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.timeouts"></a>

```csharp
public VaultClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#timeouts VaultCluster#timeouts}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#upgrade_type VaultCluster#upgrade_type}

---

##### `MaintenanceWindowDay`<sup>Optional</sup> <a name="MaintenanceWindowDay" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowDay"></a>

```csharp
public string MaintenanceWindowDay { get; set; }
```

- *Type:* string

The maintenance day of the week for scheduled upgrades.

Valid options for maintenance window day - `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#maintenance_window_day VaultCluster#maintenance_window_day}

---

##### `MaintenanceWindowTime`<sup>Optional</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowTime"></a>

```csharp
public string MaintenanceWindowTime { get; set; }
```

- *Type:* string

The maintenance time frame for scheduled upgrades. Valid options for maintenance window time - `WINDOW_12AM_4AM`, `WINDOW_6AM_10AM`, `WINDOW_12PM_4PM`, `WINDOW_6PM_10PM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#maintenance_window_time VaultCluster#maintenance_window_time}

---

### VaultClusterMetricsConfig <a name="VaultClusterMetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultClusterMetricsConfig {
    string DatadogApiKey = null,
    string DatadogRegion = null,
    string GrafanaEndpoint = null,
    string GrafanaPassword = null,
    string GrafanaUser = null,
    string SplunkHecendpoint = null,
    string SplunkToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogApiKey">DatadogApiKey</a></code> | <code>string</code> | Datadog api key for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogRegion">DatadogRegion</a></code> | <code>string</code> | Datadog region for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaEndpoint">GrafanaEndpoint</a></code> | <code>string</code> | Grafana endpoint for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaPassword">GrafanaPassword</a></code> | <code>string</code> | Grafana password for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaUser">GrafanaUser</a></code> | <code>string</code> | Grafana user for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkHecendpoint">SplunkHecendpoint</a></code> | <code>string</code> | Splunk endpoint for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkToken">SplunkToken</a></code> | <code>string</code> | Splunk token for streaming metrics. |

---

##### `DatadogApiKey`<sup>Optional</sup> <a name="DatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogApiKey"></a>

```csharp
public string DatadogApiKey { get; set; }
```

- *Type:* string

Datadog api key for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}

---

##### `DatadogRegion`<sup>Optional</sup> <a name="DatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogRegion"></a>

```csharp
public string DatadogRegion { get; set; }
```

- *Type:* string

Datadog region for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#datadog_region VaultCluster#datadog_region}

---

##### `GrafanaEndpoint`<sup>Optional</sup> <a name="GrafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaEndpoint"></a>

```csharp
public string GrafanaEndpoint { get; set; }
```

- *Type:* string

Grafana endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}

---

##### `GrafanaPassword`<sup>Optional</sup> <a name="GrafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaPassword"></a>

```csharp
public string GrafanaPassword { get; set; }
```

- *Type:* string

Grafana password for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#grafana_password VaultCluster#grafana_password}

---

##### `GrafanaUser`<sup>Optional</sup> <a name="GrafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaUser"></a>

```csharp
public string GrafanaUser { get; set; }
```

- *Type:* string

Grafana user for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#grafana_user VaultCluster#grafana_user}

---

##### `SplunkHecendpoint`<sup>Optional</sup> <a name="SplunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkHecendpoint"></a>

```csharp
public string SplunkHecendpoint { get; set; }
```

- *Type:* string

Splunk endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}

---

##### `SplunkToken`<sup>Optional</sup> <a name="SplunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkToken"></a>

```csharp
public string SplunkToken { get; set; }
```

- *Type:* string

Splunk token for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#splunk_token VaultCluster#splunk_token}

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
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#create VaultCluster#create}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#default VaultCluster#default}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#delete VaultCluster#delete}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#update VaultCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#create VaultCluster#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#default VaultCluster#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#delete VaultCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/vault_cluster#update VaultCluster#update}.

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
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogApiKey">ResetDatadogApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogRegion">ResetDatadogRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaEndpoint">ResetGrafanaEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaPassword">ResetGrafanaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaUser">ResetGrafanaUser</a></code> | *No description.* |
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

##### `ResetDatadogApiKey` <a name="ResetDatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogApiKey"></a>

```csharp
private void ResetDatadogApiKey()
```

##### `ResetDatadogRegion` <a name="ResetDatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogRegion"></a>

```csharp
private void ResetDatadogRegion()
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
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKeyInput">DatadogApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegionInput">DatadogRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpointInput">GrafanaEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPasswordInput">GrafanaPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUserInput">GrafanaUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpointInput">SplunkHecendpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkTokenInput">SplunkTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKey">DatadogApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegion">DatadogRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint">GrafanaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPassword">GrafanaPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUser">GrafanaUser</a></code> | <code>string</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogApiKey">ResetDatadogApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogRegion">ResetDatadogRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaEndpoint">ResetGrafanaEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaPassword">ResetGrafanaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaUser">ResetGrafanaUser</a></code> | *No description.* |
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

##### `ResetDatadogApiKey` <a name="ResetDatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogApiKey"></a>

```csharp
private void ResetDatadogApiKey()
```

##### `ResetDatadogRegion` <a name="ResetDatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogRegion"></a>

```csharp
private void ResetDatadogRegion()
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
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKeyInput">DatadogApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegionInput">DatadogRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpointInput">GrafanaEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPasswordInput">GrafanaPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUserInput">GrafanaUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpointInput">SplunkHecendpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkTokenInput">SplunkTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKey">DatadogApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegion">DatadogRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpoint">GrafanaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPassword">GrafanaPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUser">GrafanaUser</a></code> | <code>string</code> | *No description.* |
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



