# `data_hcp_vault_cluster`

Refer to the Terraform Registory for docs: [`data_hcp_vault_cluster`](https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/data-sources/vault_cluster).

# `dataHcpVaultCluster` Submodule <a name="`dataHcpVaultCluster` Submodule" id="@cdktf/provider-hcp.dataHcpVaultCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpVaultCluster <a name="DataHcpVaultCluster" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/data-sources/vault_cluster hcp_vault_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultCluster(Construct Scope, string Id, DataHcpVaultClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig">DataHcpVaultClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig">DataHcpVaultClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putAuditLogConfig">PutAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putMetricsConfig">PutMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetAuditLogConfig">ResetAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetMetricsConfig">ResetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAuditLogConfig` <a name="PutAuditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putAuditLogConfig"></a>

```csharp
private void PutAuditLogConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putAuditLogConfig.parameter.value"></a>

- *Type:* object

---

##### `PutMetricsConfig` <a name="PutMetricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putMetricsConfig"></a>

```csharp
private void PutMetricsConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putMetricsConfig.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(DataHcpVaultClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a>

---

##### `ResetAuditLogConfig` <a name="ResetAuditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetAuditLogConfig"></a>

```csharp
private void ResetAuditLogConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetricsConfig` <a name="ResetMetricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetMetricsConfig"></a>

```csharp
private void ResetMetricsConfig()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpVaultCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpVaultCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpVaultCluster.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.auditLogConfig">AuditLogConfig</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList">DataHcpVaultClusterAuditLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.hvnId">HvnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.majorVersionUpgradeConfig">MajorVersionUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList">DataHcpVaultClusterMajorVersionUpgradeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList">DataHcpVaultClusterMetricsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.minVaultVersion">MinVaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.pathsFilter">PathsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.primaryLink">PrimaryLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.publicEndpoint">PublicEndpoint</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference">DataHcpVaultClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultPrivateEndpointUrl">VaultPrivateEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultPublicEndpointUrl">VaultPublicEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultVersion">VaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.auditLogConfigInput">AuditLogConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.metricsConfigInput">MetricsConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuditLogConfig`<sup>Required</sup> <a name="AuditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.auditLogConfig"></a>

```csharp
public DataHcpVaultClusterAuditLogConfigList AuditLogConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList">DataHcpVaultClusterAuditLogConfigList</a>

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `HvnId`<sup>Required</sup> <a name="HvnId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.hvnId"></a>

```csharp
public string HvnId { get; }
```

- *Type:* string

---

##### `MajorVersionUpgradeConfig`<sup>Required</sup> <a name="MajorVersionUpgradeConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.majorVersionUpgradeConfig"></a>

```csharp
public DataHcpVaultClusterMajorVersionUpgradeConfigList MajorVersionUpgradeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList">DataHcpVaultClusterMajorVersionUpgradeConfigList</a>

---

##### `MetricsConfig`<sup>Required</sup> <a name="MetricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.metricsConfig"></a>

```csharp
public DataHcpVaultClusterMetricsConfigList MetricsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList">DataHcpVaultClusterMetricsConfigList</a>

---

##### `MinVaultVersion`<sup>Required</sup> <a name="MinVaultVersion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.minVaultVersion"></a>

```csharp
public string MinVaultVersion { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `PathsFilter`<sup>Required</sup> <a name="PathsFilter" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.pathsFilter"></a>

```csharp
public string[] PathsFilter { get; }
```

- *Type:* string[]

---

##### `PrimaryLink`<sup>Required</sup> <a name="PrimaryLink" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.primaryLink"></a>

```csharp
public string PrimaryLink { get; }
```

- *Type:* string

---

##### `PublicEndpoint`<sup>Required</sup> <a name="PublicEndpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.publicEndpoint"></a>

```csharp
public IResolvable PublicEndpoint { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.timeouts"></a>

```csharp
public DataHcpVaultClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference">DataHcpVaultClusterTimeoutsOutputReference</a>

---

##### `VaultPrivateEndpointUrl`<sup>Required</sup> <a name="VaultPrivateEndpointUrl" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultPrivateEndpointUrl"></a>

```csharp
public string VaultPrivateEndpointUrl { get; }
```

- *Type:* string

---

##### `VaultPublicEndpointUrl`<sup>Required</sup> <a name="VaultPublicEndpointUrl" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultPublicEndpointUrl"></a>

```csharp
public string VaultPublicEndpointUrl { get; }
```

- *Type:* string

---

##### `VaultVersion`<sup>Required</sup> <a name="VaultVersion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultVersion"></a>

```csharp
public string VaultVersion { get; }
```

- *Type:* string

---

##### `AuditLogConfigInput`<sup>Optional</sup> <a name="AuditLogConfigInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.auditLogConfigInput"></a>

```csharp
public object AuditLogConfigInput { get; }
```

- *Type:* object

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricsConfigInput`<sup>Optional</sup> <a name="MetricsConfigInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.metricsConfigInput"></a>

```csharp
public object MetricsConfigInput { get; }
```

- *Type:* object

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpVaultClusterAuditLogConfig <a name="DataHcpVaultClusterAuditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultClusterAuditLogConfig {

};
```


### DataHcpVaultClusterConfig <a name="DataHcpVaultClusterConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    object AuditLogConfig = null,
    string Id = null,
    object MetricsConfig = null,
    string ProjectId = null,
    DataHcpVaultClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | The ID of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.auditLogConfig">AuditLogConfig</a></code> | <code>object</code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/data-sources/vault_cluster#id DataHcpVaultCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.metricsConfig">MetricsConfig</a></code> | <code>object</code> | metrics_config block. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where the Vault cluster is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The ID of the HCP Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/data-sources/vault_cluster#cluster_id DataHcpVaultCluster#cluster_id}

---

##### `AuditLogConfig`<sup>Optional</sup> <a name="AuditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.auditLogConfig"></a>

```csharp
public object AuditLogConfig { get; set; }
```

- *Type:* object

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/data-sources/vault_cluster#audit_log_config DataHcpVaultCluster#audit_log_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/data-sources/vault_cluster#id DataHcpVaultCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetricsConfig`<sup>Optional</sup> <a name="MetricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.metricsConfig"></a>

```csharp
public object MetricsConfig { get; set; }
```

- *Type:* object

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/data-sources/vault_cluster#metrics_config DataHcpVaultCluster#metrics_config}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where the Vault cluster is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/data-sources/vault_cluster#project_id DataHcpVaultCluster#project_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.timeouts"></a>

```csharp
public DataHcpVaultClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/data-sources/vault_cluster#timeouts DataHcpVaultCluster#timeouts}

---

### DataHcpVaultClusterMajorVersionUpgradeConfig <a name="DataHcpVaultClusterMajorVersionUpgradeConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultClusterMajorVersionUpgradeConfig {

};
```


### DataHcpVaultClusterMetricsConfig <a name="DataHcpVaultClusterMetricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultClusterMetricsConfig {

};
```


### DataHcpVaultClusterTimeouts <a name="DataHcpVaultClusterTimeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultClusterTimeouts {
    string Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/data-sources/vault_cluster#default DataHcpVaultCluster#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/data-sources/vault_cluster#default DataHcpVaultCluster#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpVaultClusterAuditLogConfigList <a name="DataHcpVaultClusterAuditLogConfigList" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultClusterAuditLogConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.get"></a>

```csharp
private DataHcpVaultClusterAuditLogConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataHcpVaultClusterAuditLogConfigOutputReference <a name="DataHcpVaultClusterAuditLogConfigOutputReference" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultClusterAuditLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.datadogRegion">DatadogRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint">GrafanaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.grafanaUser">GrafanaUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint">SplunkHecendpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatadogRegion`<sup>Required</sup> <a name="DatadogRegion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.datadogRegion"></a>

```csharp
public string DatadogRegion { get; }
```

- *Type:* string

---

##### `GrafanaEndpoint`<sup>Required</sup> <a name="GrafanaEndpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint"></a>

```csharp
public string GrafanaEndpoint { get; }
```

- *Type:* string

---

##### `GrafanaUser`<sup>Required</sup> <a name="GrafanaUser" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.grafanaUser"></a>

```csharp
public string GrafanaUser { get; }
```

- *Type:* string

---

##### `SplunkHecendpoint`<sup>Required</sup> <a name="SplunkHecendpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint"></a>

```csharp
public string SplunkHecendpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataHcpVaultClusterMajorVersionUpgradeConfigList <a name="DataHcpVaultClusterMajorVersionUpgradeConfigList" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultClusterMajorVersionUpgradeConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.get"></a>

```csharp
private DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference <a name="DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay">MaintenanceWindowDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType">UpgradeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfig">DataHcpVaultClusterMajorVersionUpgradeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaintenanceWindowDay`<sup>Required</sup> <a name="MaintenanceWindowDay" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay"></a>

```csharp
public string MaintenanceWindowDay { get; }
```

- *Type:* string

---

##### `MaintenanceWindowTime`<sup>Required</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime"></a>

```csharp
public string MaintenanceWindowTime { get; }
```

- *Type:* string

---

##### `UpgradeType`<sup>Required</sup> <a name="UpgradeType" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType"></a>

```csharp
public string UpgradeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue"></a>

```csharp
public DataHcpVaultClusterMajorVersionUpgradeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfig">DataHcpVaultClusterMajorVersionUpgradeConfig</a>

---


### DataHcpVaultClusterMetricsConfigList <a name="DataHcpVaultClusterMetricsConfigList" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultClusterMetricsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.get"></a>

```csharp
private DataHcpVaultClusterMetricsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataHcpVaultClusterMetricsConfigOutputReference <a name="DataHcpVaultClusterMetricsConfigOutputReference" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultClusterMetricsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.datadogRegion">DatadogRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.grafanaEndpoint">GrafanaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.grafanaUser">GrafanaUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.splunkHecendpoint">SplunkHecendpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatadogRegion`<sup>Required</sup> <a name="DatadogRegion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.datadogRegion"></a>

```csharp
public string DatadogRegion { get; }
```

- *Type:* string

---

##### `GrafanaEndpoint`<sup>Required</sup> <a name="GrafanaEndpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.grafanaEndpoint"></a>

```csharp
public string GrafanaEndpoint { get; }
```

- *Type:* string

---

##### `GrafanaUser`<sup>Required</sup> <a name="GrafanaUser" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.grafanaUser"></a>

```csharp
public string GrafanaUser { get; }
```

- *Type:* string

---

##### `SplunkHecendpoint`<sup>Required</sup> <a name="SplunkHecendpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.splunkHecendpoint"></a>

```csharp
public string SplunkHecendpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataHcpVaultClusterTimeoutsOutputReference <a name="DataHcpVaultClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpVaultClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



