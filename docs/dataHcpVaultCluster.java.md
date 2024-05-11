# `dataHcpVaultCluster` Submodule <a name="`dataHcpVaultCluster` Submodule" id="@cdktf/provider-hcp.dataHcpVaultCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpVaultCluster <a name="DataHcpVaultCluster" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster hcp_vault_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultCluster;

DataHcpVaultCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterId(java.lang.String)
//  .auditLogConfig(IResolvable)
//  .auditLogConfig(java.util.List<DataHcpVaultClusterAuditLogConfig>)
//  .id(java.lang.String)
//  .metricsConfig(IResolvable)
//  .metricsConfig(java.util.List<DataHcpVaultClusterMetricsConfig>)
//  .projectId(java.lang.String)
//  .timeouts(DataHcpVaultClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.auditLogConfig">auditLogConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig">DataHcpVaultClusterAuditLogConfig</a>></code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#id DataHcpVaultCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.metricsConfig">metricsConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig">DataHcpVaultClusterMetricsConfig</a>></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Vault cluster is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

The ID of the HCP Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#cluster_id DataHcpVaultCluster#cluster_id}

---

##### `auditLogConfig`<sup>Optional</sup> <a name="auditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.auditLogConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig">DataHcpVaultClusterAuditLogConfig</a>>

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#audit_log_config DataHcpVaultCluster#audit_log_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#id DataHcpVaultCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricsConfig`<sup>Optional</sup> <a name="metricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.metricsConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig">DataHcpVaultClusterMetricsConfig</a>>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#metrics_config DataHcpVaultCluster#metrics_config}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where the Vault cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#project_id DataHcpVaultCluster#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#timeouts DataHcpVaultCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putAuditLogConfig">putAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putMetricsConfig">putMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetAuditLogConfig">resetAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetMetricsConfig">resetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAuditLogConfig` <a name="putAuditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putAuditLogConfig"></a>

```java
public void putAuditLogConfig(IResolvable OR java.util.List<DataHcpVaultClusterAuditLogConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putAuditLogConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig">DataHcpVaultClusterAuditLogConfig</a>>

---

##### `putMetricsConfig` <a name="putMetricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putMetricsConfig"></a>

```java
public void putMetricsConfig(IResolvable OR java.util.List<DataHcpVaultClusterMetricsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putMetricsConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig">DataHcpVaultClusterMetricsConfig</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putTimeouts"></a>

```java
public void putTimeouts(DataHcpVaultClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a>

---

##### `resetAuditLogConfig` <a name="resetAuditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetAuditLogConfig"></a>

```java
public void resetAuditLogConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetId"></a>

```java
public void resetId()
```

##### `resetMetricsConfig` <a name="resetMetricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetMetricsConfig"></a>

```java
public void resetMetricsConfig()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpVaultCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultCluster;

DataHcpVaultCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultCluster;

DataHcpVaultCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultCluster;

DataHcpVaultCluster.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultCluster;

DataHcpVaultCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataHcpVaultCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataHcpVaultCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataHcpVaultCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataHcpVaultCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpVaultCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.auditLogConfig">auditLogConfig</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList">DataHcpVaultClusterAuditLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.hvnId">hvnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.ipAllowlist">ipAllowlist</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList">DataHcpVaultClusterIpAllowlistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.majorVersionUpgradeConfig">majorVersionUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList">DataHcpVaultClusterMajorVersionUpgradeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.metricsConfig">metricsConfig</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList">DataHcpVaultClusterMetricsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.minVaultVersion">minVaultVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.pathsFilter">pathsFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.primaryLink">primaryLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.proxyEndpoint">proxyEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.publicEndpoint">publicEndpoint</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference">DataHcpVaultClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultPrivateEndpointUrl">vaultPrivateEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultProxyEndpointUrl">vaultProxyEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultPublicEndpointUrl">vaultPublicEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultVersion">vaultVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.auditLogConfigInput">auditLogConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig">DataHcpVaultClusterAuditLogConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.metricsConfigInput">metricsConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig">DataHcpVaultClusterMetricsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `auditLogConfig`<sup>Required</sup> <a name="auditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.auditLogConfig"></a>

```java
public DataHcpVaultClusterAuditLogConfigList getAuditLogConfig();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList">DataHcpVaultClusterAuditLogConfigList</a>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.hvnId"></a>

```java
public java.lang.String getHvnId();
```

- *Type:* java.lang.String

---

##### `ipAllowlist`<sup>Required</sup> <a name="ipAllowlist" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.ipAllowlist"></a>

```java
public DataHcpVaultClusterIpAllowlistStructList getIpAllowlist();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList">DataHcpVaultClusterIpAllowlistStructList</a>

---

##### `majorVersionUpgradeConfig`<sup>Required</sup> <a name="majorVersionUpgradeConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.majorVersionUpgradeConfig"></a>

```java
public DataHcpVaultClusterMajorVersionUpgradeConfigList getMajorVersionUpgradeConfig();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList">DataHcpVaultClusterMajorVersionUpgradeConfigList</a>

---

##### `metricsConfig`<sup>Required</sup> <a name="metricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.metricsConfig"></a>

```java
public DataHcpVaultClusterMetricsConfigList getMetricsConfig();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList">DataHcpVaultClusterMetricsConfigList</a>

---

##### `minVaultVersion`<sup>Required</sup> <a name="minVaultVersion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.minVaultVersion"></a>

```java
public java.lang.String getMinVaultVersion();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `pathsFilter`<sup>Required</sup> <a name="pathsFilter" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.pathsFilter"></a>

```java
public java.util.List<java.lang.String> getPathsFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `primaryLink`<sup>Required</sup> <a name="primaryLink" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.primaryLink"></a>

```java
public java.lang.String getPrimaryLink();
```

- *Type:* java.lang.String

---

##### `proxyEndpoint`<sup>Required</sup> <a name="proxyEndpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.proxyEndpoint"></a>

```java
public java.lang.String getProxyEndpoint();
```

- *Type:* java.lang.String

---

##### `publicEndpoint`<sup>Required</sup> <a name="publicEndpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.publicEndpoint"></a>

```java
public IResolvable getPublicEndpoint();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.timeouts"></a>

```java
public DataHcpVaultClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference">DataHcpVaultClusterTimeoutsOutputReference</a>

---

##### `vaultPrivateEndpointUrl`<sup>Required</sup> <a name="vaultPrivateEndpointUrl" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultPrivateEndpointUrl"></a>

```java
public java.lang.String getVaultPrivateEndpointUrl();
```

- *Type:* java.lang.String

---

##### `vaultProxyEndpointUrl`<sup>Required</sup> <a name="vaultProxyEndpointUrl" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultProxyEndpointUrl"></a>

```java
public java.lang.String getVaultProxyEndpointUrl();
```

- *Type:* java.lang.String

---

##### `vaultPublicEndpointUrl`<sup>Required</sup> <a name="vaultPublicEndpointUrl" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultPublicEndpointUrl"></a>

```java
public java.lang.String getVaultPublicEndpointUrl();
```

- *Type:* java.lang.String

---

##### `vaultVersion`<sup>Required</sup> <a name="vaultVersion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultVersion"></a>

```java
public java.lang.String getVaultVersion();
```

- *Type:* java.lang.String

---

##### `auditLogConfigInput`<sup>Optional</sup> <a name="auditLogConfigInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.auditLogConfigInput"></a>

```java
public java.lang.Object getAuditLogConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig">DataHcpVaultClusterAuditLogConfig</a>>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricsConfigInput`<sup>Optional</sup> <a name="metricsConfigInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.metricsConfigInput"></a>

```java
public java.lang.Object getMetricsConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig">DataHcpVaultClusterMetricsConfig</a>>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpVaultClusterAuditLogConfig <a name="DataHcpVaultClusterAuditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterAuditLogConfig;

DataHcpVaultClusterAuditLogConfig.builder()
    .build();
```


### DataHcpVaultClusterConfig <a name="DataHcpVaultClusterConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterConfig;

DataHcpVaultClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterId(java.lang.String)
//  .auditLogConfig(IResolvable)
//  .auditLogConfig(java.util.List<DataHcpVaultClusterAuditLogConfig>)
//  .id(java.lang.String)
//  .metricsConfig(IResolvable)
//  .metricsConfig(java.util.List<DataHcpVaultClusterMetricsConfig>)
//  .projectId(java.lang.String)
//  .timeouts(DataHcpVaultClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.auditLogConfig">auditLogConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig">DataHcpVaultClusterAuditLogConfig</a>></code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#id DataHcpVaultCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.metricsConfig">metricsConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig">DataHcpVaultClusterMetricsConfig</a>></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Vault cluster is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

The ID of the HCP Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#cluster_id DataHcpVaultCluster#cluster_id}

---

##### `auditLogConfig`<sup>Optional</sup> <a name="auditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.auditLogConfig"></a>

```java
public java.lang.Object getAuditLogConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig">DataHcpVaultClusterAuditLogConfig</a>>

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#audit_log_config DataHcpVaultCluster#audit_log_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#id DataHcpVaultCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricsConfig`<sup>Optional</sup> <a name="metricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.metricsConfig"></a>

```java
public java.lang.Object getMetricsConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig">DataHcpVaultClusterMetricsConfig</a>>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#metrics_config DataHcpVaultCluster#metrics_config}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where the Vault cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#project_id DataHcpVaultCluster#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.timeouts"></a>

```java
public DataHcpVaultClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#timeouts DataHcpVaultCluster#timeouts}

---

### DataHcpVaultClusterIpAllowlistStruct <a name="DataHcpVaultClusterIpAllowlistStruct" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterIpAllowlistStruct;

DataHcpVaultClusterIpAllowlistStruct.builder()
    .build();
```


### DataHcpVaultClusterMajorVersionUpgradeConfig <a name="DataHcpVaultClusterMajorVersionUpgradeConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterMajorVersionUpgradeConfig;

DataHcpVaultClusterMajorVersionUpgradeConfig.builder()
    .build();
```


### DataHcpVaultClusterMetricsConfig <a name="DataHcpVaultClusterMetricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterMetricsConfig;

DataHcpVaultClusterMetricsConfig.builder()
    .build();
```


### DataHcpVaultClusterTimeouts <a name="DataHcpVaultClusterTimeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterTimeouts;

DataHcpVaultClusterTimeouts.builder()
//  .default(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#default DataHcpVaultCluster#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/data-sources/vault_cluster#default DataHcpVaultCluster#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpVaultClusterAuditLogConfigList <a name="DataHcpVaultClusterAuditLogConfigList" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterAuditLogConfigList;

new DataHcpVaultClusterAuditLogConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.get"></a>

```java
public DataHcpVaultClusterAuditLogConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig">DataHcpVaultClusterAuditLogConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig">DataHcpVaultClusterAuditLogConfig</a>>

---


### DataHcpVaultClusterAuditLogConfigOutputReference <a name="DataHcpVaultClusterAuditLogConfigOutputReference" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterAuditLogConfigOutputReference;

new DataHcpVaultClusterAuditLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.cloudwatchAccessKeyId">cloudwatchAccessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.cloudwatchGroupName">cloudwatchGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.cloudwatchRegion">cloudwatchRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.cloudwatchSecretAccessKey">cloudwatchSecretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.cloudwatchStreamName">cloudwatchStreamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.datadogRegion">datadogRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.elasticsearchDataset">elasticsearchDataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.elasticsearchEndpoint">elasticsearchEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.elasticsearchPassword">elasticsearchPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.elasticsearchUser">elasticsearchUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint">grafanaEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.grafanaUser">grafanaUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpBasicPassword">httpBasicPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpBasicUser">httpBasicUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpBearerToken">httpBearerToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpCodec">httpCodec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpCompression">httpCompression</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpHeaders">httpHeaders</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpPayloadPrefix">httpPayloadPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpPayloadSuffix">httpPayloadSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpUri">httpUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.newrelicAccountId">newrelicAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.newrelicLicenseKey">newrelicLicenseKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.newrelicRegion">newrelicRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint">splunkHecendpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig">DataHcpVaultClusterAuditLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchAccessKeyId`<sup>Required</sup> <a name="cloudwatchAccessKeyId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.cloudwatchAccessKeyId"></a>

```java
public java.lang.String getCloudwatchAccessKeyId();
```

- *Type:* java.lang.String

---

##### `cloudwatchGroupName`<sup>Required</sup> <a name="cloudwatchGroupName" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.cloudwatchGroupName"></a>

```java
public java.lang.String getCloudwatchGroupName();
```

- *Type:* java.lang.String

---

##### `cloudwatchRegion`<sup>Required</sup> <a name="cloudwatchRegion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.cloudwatchRegion"></a>

```java
public java.lang.String getCloudwatchRegion();
```

- *Type:* java.lang.String

---

##### `cloudwatchSecretAccessKey`<sup>Required</sup> <a name="cloudwatchSecretAccessKey" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.cloudwatchSecretAccessKey"></a>

```java
public java.lang.String getCloudwatchSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `cloudwatchStreamName`<sup>Required</sup> <a name="cloudwatchStreamName" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.cloudwatchStreamName"></a>

```java
public java.lang.String getCloudwatchStreamName();
```

- *Type:* java.lang.String

---

##### `datadogRegion`<sup>Required</sup> <a name="datadogRegion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.datadogRegion"></a>

```java
public java.lang.String getDatadogRegion();
```

- *Type:* java.lang.String

---

##### `elasticsearchDataset`<sup>Required</sup> <a name="elasticsearchDataset" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.elasticsearchDataset"></a>

```java
public java.lang.String getElasticsearchDataset();
```

- *Type:* java.lang.String

---

##### `elasticsearchEndpoint`<sup>Required</sup> <a name="elasticsearchEndpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.elasticsearchEndpoint"></a>

```java
public java.lang.String getElasticsearchEndpoint();
```

- *Type:* java.lang.String

---

##### `elasticsearchPassword`<sup>Required</sup> <a name="elasticsearchPassword" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.elasticsearchPassword"></a>

```java
public java.lang.String getElasticsearchPassword();
```

- *Type:* java.lang.String

---

##### `elasticsearchUser`<sup>Required</sup> <a name="elasticsearchUser" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.elasticsearchUser"></a>

```java
public java.lang.String getElasticsearchUser();
```

- *Type:* java.lang.String

---

##### `grafanaEndpoint`<sup>Required</sup> <a name="grafanaEndpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint"></a>

```java
public java.lang.String getGrafanaEndpoint();
```

- *Type:* java.lang.String

---

##### `grafanaUser`<sup>Required</sup> <a name="grafanaUser" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.grafanaUser"></a>

```java
public java.lang.String getGrafanaUser();
```

- *Type:* java.lang.String

---

##### `httpBasicPassword`<sup>Required</sup> <a name="httpBasicPassword" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpBasicPassword"></a>

```java
public java.lang.String getHttpBasicPassword();
```

- *Type:* java.lang.String

---

##### `httpBasicUser`<sup>Required</sup> <a name="httpBasicUser" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpBasicUser"></a>

```java
public java.lang.String getHttpBasicUser();
```

- *Type:* java.lang.String

---

##### `httpBearerToken`<sup>Required</sup> <a name="httpBearerToken" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpBearerToken"></a>

```java
public java.lang.String getHttpBearerToken();
```

- *Type:* java.lang.String

---

##### `httpCodec`<sup>Required</sup> <a name="httpCodec" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpCodec"></a>

```java
public java.lang.String getHttpCodec();
```

- *Type:* java.lang.String

---

##### `httpCompression`<sup>Required</sup> <a name="httpCompression" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpCompression"></a>

```java
public IResolvable getHttpCompression();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpHeaders"></a>

```java
public StringMap getHttpHeaders();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `httpPayloadPrefix`<sup>Required</sup> <a name="httpPayloadPrefix" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpPayloadPrefix"></a>

```java
public java.lang.String getHttpPayloadPrefix();
```

- *Type:* java.lang.String

---

##### `httpPayloadSuffix`<sup>Required</sup> <a name="httpPayloadSuffix" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpPayloadSuffix"></a>

```java
public java.lang.String getHttpPayloadSuffix();
```

- *Type:* java.lang.String

---

##### `httpUri`<sup>Required</sup> <a name="httpUri" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.httpUri"></a>

```java
public java.lang.String getHttpUri();
```

- *Type:* java.lang.String

---

##### `newrelicAccountId`<sup>Required</sup> <a name="newrelicAccountId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.newrelicAccountId"></a>

```java
public java.lang.String getNewrelicAccountId();
```

- *Type:* java.lang.String

---

##### `newrelicLicenseKey`<sup>Required</sup> <a name="newrelicLicenseKey" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.newrelicLicenseKey"></a>

```java
public java.lang.String getNewrelicLicenseKey();
```

- *Type:* java.lang.String

---

##### `newrelicRegion`<sup>Required</sup> <a name="newrelicRegion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.newrelicRegion"></a>

```java
public java.lang.String getNewrelicRegion();
```

- *Type:* java.lang.String

---

##### `splunkHecendpoint`<sup>Required</sup> <a name="splunkHecendpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint"></a>

```java
public java.lang.String getSplunkHecendpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig">DataHcpVaultClusterAuditLogConfig</a>

---


### DataHcpVaultClusterIpAllowlistStructList <a name="DataHcpVaultClusterIpAllowlistStructList" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterIpAllowlistStructList;

new DataHcpVaultClusterIpAllowlistStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.get"></a>

```java
public DataHcpVaultClusterIpAllowlistStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataHcpVaultClusterIpAllowlistStructOutputReference <a name="DataHcpVaultClusterIpAllowlistStructOutputReference" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterIpAllowlistStructOutputReference;

new DataHcpVaultClusterIpAllowlistStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStruct">DataHcpVaultClusterIpAllowlistStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStructOutputReference.property.internalValue"></a>

```java
public DataHcpVaultClusterIpAllowlistStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterIpAllowlistStruct">DataHcpVaultClusterIpAllowlistStruct</a>

---


### DataHcpVaultClusterMajorVersionUpgradeConfigList <a name="DataHcpVaultClusterMajorVersionUpgradeConfigList" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterMajorVersionUpgradeConfigList;

new DataHcpVaultClusterMajorVersionUpgradeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.get"></a>

```java
public DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference <a name="DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference;

new DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay">maintenanceWindowDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType">upgradeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfig">DataHcpVaultClusterMajorVersionUpgradeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowDay`<sup>Required</sup> <a name="maintenanceWindowDay" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay"></a>

```java
public java.lang.String getMaintenanceWindowDay();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowTime`<sup>Required</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime"></a>

```java
public java.lang.String getMaintenanceWindowTime();
```

- *Type:* java.lang.String

---

##### `upgradeType`<sup>Required</sup> <a name="upgradeType" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType"></a>

```java
public java.lang.String getUpgradeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue"></a>

```java
public DataHcpVaultClusterMajorVersionUpgradeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfig">DataHcpVaultClusterMajorVersionUpgradeConfig</a>

---


### DataHcpVaultClusterMetricsConfigList <a name="DataHcpVaultClusterMetricsConfigList" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterMetricsConfigList;

new DataHcpVaultClusterMetricsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.get"></a>

```java
public DataHcpVaultClusterMetricsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig">DataHcpVaultClusterMetricsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig">DataHcpVaultClusterMetricsConfig</a>>

---


### DataHcpVaultClusterMetricsConfigOutputReference <a name="DataHcpVaultClusterMetricsConfigOutputReference" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterMetricsConfigOutputReference;

new DataHcpVaultClusterMetricsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.cloudwatchAccessKeyId">cloudwatchAccessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.cloudwatchNamespace">cloudwatchNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.cloudwatchRegion">cloudwatchRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.cloudwatchSecretAccessKey">cloudwatchSecretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.datadogRegion">datadogRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.elasticsearchDataset">elasticsearchDataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.elasticsearchEndpoint">elasticsearchEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.elasticsearchPassword">elasticsearchPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.elasticsearchUser">elasticsearchUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.grafanaEndpoint">grafanaEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.grafanaUser">grafanaUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpBasicPassword">httpBasicPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpBasicUser">httpBasicUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpBearerToken">httpBearerToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpCodec">httpCodec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpCompression">httpCompression</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpHeaders">httpHeaders</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpPayloadPrefix">httpPayloadPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpPayloadSuffix">httpPayloadSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpUri">httpUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.newrelicAccountId">newrelicAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.newrelicLicenseKey">newrelicLicenseKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.newrelicRegion">newrelicRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.splunkHecendpoint">splunkHecendpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig">DataHcpVaultClusterMetricsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchAccessKeyId`<sup>Required</sup> <a name="cloudwatchAccessKeyId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.cloudwatchAccessKeyId"></a>

```java
public java.lang.String getCloudwatchAccessKeyId();
```

- *Type:* java.lang.String

---

##### `cloudwatchNamespace`<sup>Required</sup> <a name="cloudwatchNamespace" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.cloudwatchNamespace"></a>

```java
public java.lang.String getCloudwatchNamespace();
```

- *Type:* java.lang.String

---

##### `cloudwatchRegion`<sup>Required</sup> <a name="cloudwatchRegion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.cloudwatchRegion"></a>

```java
public java.lang.String getCloudwatchRegion();
```

- *Type:* java.lang.String

---

##### `cloudwatchSecretAccessKey`<sup>Required</sup> <a name="cloudwatchSecretAccessKey" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.cloudwatchSecretAccessKey"></a>

```java
public java.lang.String getCloudwatchSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `datadogRegion`<sup>Required</sup> <a name="datadogRegion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.datadogRegion"></a>

```java
public java.lang.String getDatadogRegion();
```

- *Type:* java.lang.String

---

##### `elasticsearchDataset`<sup>Required</sup> <a name="elasticsearchDataset" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.elasticsearchDataset"></a>

```java
public java.lang.String getElasticsearchDataset();
```

- *Type:* java.lang.String

---

##### `elasticsearchEndpoint`<sup>Required</sup> <a name="elasticsearchEndpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.elasticsearchEndpoint"></a>

```java
public java.lang.String getElasticsearchEndpoint();
```

- *Type:* java.lang.String

---

##### `elasticsearchPassword`<sup>Required</sup> <a name="elasticsearchPassword" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.elasticsearchPassword"></a>

```java
public java.lang.String getElasticsearchPassword();
```

- *Type:* java.lang.String

---

##### `elasticsearchUser`<sup>Required</sup> <a name="elasticsearchUser" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.elasticsearchUser"></a>

```java
public java.lang.String getElasticsearchUser();
```

- *Type:* java.lang.String

---

##### `grafanaEndpoint`<sup>Required</sup> <a name="grafanaEndpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.grafanaEndpoint"></a>

```java
public java.lang.String getGrafanaEndpoint();
```

- *Type:* java.lang.String

---

##### `grafanaUser`<sup>Required</sup> <a name="grafanaUser" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.grafanaUser"></a>

```java
public java.lang.String getGrafanaUser();
```

- *Type:* java.lang.String

---

##### `httpBasicPassword`<sup>Required</sup> <a name="httpBasicPassword" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpBasicPassword"></a>

```java
public java.lang.String getHttpBasicPassword();
```

- *Type:* java.lang.String

---

##### `httpBasicUser`<sup>Required</sup> <a name="httpBasicUser" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpBasicUser"></a>

```java
public java.lang.String getHttpBasicUser();
```

- *Type:* java.lang.String

---

##### `httpBearerToken`<sup>Required</sup> <a name="httpBearerToken" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpBearerToken"></a>

```java
public java.lang.String getHttpBearerToken();
```

- *Type:* java.lang.String

---

##### `httpCodec`<sup>Required</sup> <a name="httpCodec" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpCodec"></a>

```java
public java.lang.String getHttpCodec();
```

- *Type:* java.lang.String

---

##### `httpCompression`<sup>Required</sup> <a name="httpCompression" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpCompression"></a>

```java
public IResolvable getHttpCompression();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpHeaders"></a>

```java
public StringMap getHttpHeaders();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `httpPayloadPrefix`<sup>Required</sup> <a name="httpPayloadPrefix" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpPayloadPrefix"></a>

```java
public java.lang.String getHttpPayloadPrefix();
```

- *Type:* java.lang.String

---

##### `httpPayloadSuffix`<sup>Required</sup> <a name="httpPayloadSuffix" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpPayloadSuffix"></a>

```java
public java.lang.String getHttpPayloadSuffix();
```

- *Type:* java.lang.String

---

##### `httpUri`<sup>Required</sup> <a name="httpUri" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.httpUri"></a>

```java
public java.lang.String getHttpUri();
```

- *Type:* java.lang.String

---

##### `newrelicAccountId`<sup>Required</sup> <a name="newrelicAccountId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.newrelicAccountId"></a>

```java
public java.lang.String getNewrelicAccountId();
```

- *Type:* java.lang.String

---

##### `newrelicLicenseKey`<sup>Required</sup> <a name="newrelicLicenseKey" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.newrelicLicenseKey"></a>

```java
public java.lang.String getNewrelicLicenseKey();
```

- *Type:* java.lang.String

---

##### `newrelicRegion`<sup>Required</sup> <a name="newrelicRegion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.newrelicRegion"></a>

```java
public java.lang.String getNewrelicRegion();
```

- *Type:* java.lang.String

---

##### `splunkHecendpoint`<sup>Required</sup> <a name="splunkHecendpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.splunkHecendpoint"></a>

```java
public java.lang.String getSplunkHecendpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig">DataHcpVaultClusterMetricsConfig</a>

---


### DataHcpVaultClusterTimeoutsOutputReference <a name="DataHcpVaultClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_cluster.DataHcpVaultClusterTimeoutsOutputReference;

new DataHcpVaultClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a>

---



