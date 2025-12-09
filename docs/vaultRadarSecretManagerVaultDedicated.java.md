# `vaultRadarSecretManagerVaultDedicated` Submodule <a name="`vaultRadarSecretManagerVaultDedicated` Submodule" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarSecretManagerVaultDedicated <a name="VaultRadarSecretManagerVaultDedicated" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated hcp_vault_radar_secret_manager_vault_dedicated}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_secret_manager_vault_dedicated.VaultRadarSecretManagerVaultDedicated;

VaultRadarSecretManagerVaultDedicated.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .vaultUrl(java.lang.String)
//  .accessReadWrite(java.lang.Boolean|IResolvable)
//  .approlePush(VaultRadarSecretManagerVaultDedicatedApprolePush)
//  .kubernetes(VaultRadarSecretManagerVaultDedicatedKubernetes)
//  .projectId(java.lang.String)
//  .token(VaultRadarSecretManagerVaultDedicatedToken)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.vaultUrl">vaultUrl</a></code> | <code>java.lang.String</code> | Specify the URL of the Vault instance without protocol. Example: 'acme-public-vault-abc.def.z1.hashicorp.cloud:8200'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.accessReadWrite">accessReadWrite</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Indicates if the auth method has read and write access to the secrets engine. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.approlePush">approlePush</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a></code> | Configuration for AppRole Push-based authentication. Only one authentication method may be configured. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a></code> | Configuration for Kubernetes-based authentication. Only one authentication method may be configured. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where Vault Radar is located. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.token">token</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a></code> | Configuration for token-based authentication. Only one authentication method may be configured. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vaultUrl`<sup>Required</sup> <a name="vaultUrl" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.vaultUrl"></a>

- *Type:* java.lang.String

Specify the URL of the Vault instance without protocol. Example: 'acme-public-vault-abc.def.z1.hashicorp.cloud:8200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#vault_url VaultRadarSecretManagerVaultDedicated#vault_url}

---

##### `accessReadWrite`<sup>Optional</sup> <a name="accessReadWrite" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.accessReadWrite"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Indicates if the auth method has read and write access to the secrets engine.

Defaults to false. Set this to true if you want to copy secrets to this secret manager as part of remediation process. (see https://developer.hashicorp.com/hcp/docs/vault-radar/remediate-secrets/copy-secrets)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#access_read_write VaultRadarSecretManagerVaultDedicated#access_read_write}

---

##### `approlePush`<sup>Optional</sup> <a name="approlePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.approlePush"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

Configuration for AppRole Push-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#approle_push VaultRadarSecretManagerVaultDedicated#approle_push}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.kubernetes"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

Configuration for Kubernetes-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#kubernetes VaultRadarSecretManagerVaultDedicated#kubernetes}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#project_id VaultRadarSecretManagerVaultDedicated#project_id}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.token"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

Configuration for token-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#token VaultRadarSecretManagerVaultDedicated#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush">putApprolePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putKubernetes">putKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putToken">putToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetAccessReadWrite">resetAccessReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetApprolePush">resetApprolePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetKubernetes">resetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprolePush` <a name="putApprolePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush"></a>

```java
public void putApprolePush(VaultRadarSecretManagerVaultDedicatedApprolePush value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

---

##### `putKubernetes` <a name="putKubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putKubernetes"></a>

```java
public void putKubernetes(VaultRadarSecretManagerVaultDedicatedKubernetes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

---

##### `putToken` <a name="putToken" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putToken"></a>

```java
public void putToken(VaultRadarSecretManagerVaultDedicatedToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

---

##### `resetAccessReadWrite` <a name="resetAccessReadWrite" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetAccessReadWrite"></a>

```java
public void resetAccessReadWrite()
```

##### `resetApprolePush` <a name="resetApprolePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetApprolePush"></a>

```java
public void resetApprolePush()
```

##### `resetKubernetes` <a name="resetKubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetKubernetes"></a>

```java
public void resetKubernetes()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultRadarSecretManagerVaultDedicated resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_secret_manager_vault_dedicated.VaultRadarSecretManagerVaultDedicated;

VaultRadarSecretManagerVaultDedicated.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_secret_manager_vault_dedicated.VaultRadarSecretManagerVaultDedicated;

VaultRadarSecretManagerVaultDedicated.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_secret_manager_vault_dedicated.VaultRadarSecretManagerVaultDedicated;

VaultRadarSecretManagerVaultDedicated.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_secret_manager_vault_dedicated.VaultRadarSecretManagerVaultDedicated;

VaultRadarSecretManagerVaultDedicated.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VaultRadarSecretManagerVaultDedicated.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VaultRadarSecretManagerVaultDedicated resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VaultRadarSecretManagerVaultDedicated to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VaultRadarSecretManagerVaultDedicated that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarSecretManagerVaultDedicated to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePush">approlePush</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference">VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference">VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.token">token</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference">VaultRadarSecretManagerVaultDedicatedTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWriteInput">accessReadWriteInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePushInput">approlePushInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetesInput">kubernetesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tokenInput">tokenInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrlInput">vaultUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWrite">accessReadWrite</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrl">vaultUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approlePush`<sup>Required</sup> <a name="approlePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePush"></a>

```java
public VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference getApprolePush();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference">VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetes"></a>

```java
public VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference getKubernetes();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference">VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.token"></a>

```java
public VaultRadarSecretManagerVaultDedicatedTokenOutputReference getToken();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference">VaultRadarSecretManagerVaultDedicatedTokenOutputReference</a>

---

##### `accessReadWriteInput`<sup>Optional</sup> <a name="accessReadWriteInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWriteInput"></a>

```java
public java.lang.Boolean|IResolvable getAccessReadWriteInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `approlePushInput`<sup>Optional</sup> <a name="approlePushInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePushInput"></a>

```java
public IResolvable|VaultRadarSecretManagerVaultDedicatedApprolePush getApprolePushInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

---

##### `kubernetesInput`<sup>Optional</sup> <a name="kubernetesInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetesInput"></a>

```java
public IResolvable|VaultRadarSecretManagerVaultDedicatedKubernetes getKubernetesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tokenInput"></a>

```java
public IResolvable|VaultRadarSecretManagerVaultDedicatedToken getTokenInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

---

##### `vaultUrlInput`<sup>Optional</sup> <a name="vaultUrlInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrlInput"></a>

```java
public java.lang.String getVaultUrlInput();
```

- *Type:* java.lang.String

---

##### `accessReadWrite`<sup>Required</sup> <a name="accessReadWrite" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWrite"></a>

```java
public java.lang.Boolean|IResolvable getAccessReadWrite();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `vaultUrl`<sup>Required</sup> <a name="vaultUrl" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrl"></a>

```java
public java.lang.String getVaultUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarSecretManagerVaultDedicatedApprolePush <a name="VaultRadarSecretManagerVaultDedicatedApprolePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_secret_manager_vault_dedicated.VaultRadarSecretManagerVaultDedicatedApprolePush;

VaultRadarSecretManagerVaultDedicatedApprolePush.builder()
    .mountPath(java.lang.String)
    .roleIdEnvVar(java.lang.String)
    .secretIdEnvVar(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Mount path of the AppRole auth method in Vault. Example 'approle'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.roleIdEnvVar">roleIdEnvVar</a></code> | <code>java.lang.String</code> | Environment variable containing the AppRole role ID. Example: 'VAULT_APPROLE_ROLE_ID'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.secretIdEnvVar">secretIdEnvVar</a></code> | <code>java.lang.String</code> | Environment variable containing the AppRole secret ID. Example: 'VAULT_APPROLE_SECRET_ID'. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Mount path of the AppRole auth method in Vault. Example 'approle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#mount_path VaultRadarSecretManagerVaultDedicated#mount_path}

---

##### `roleIdEnvVar`<sup>Required</sup> <a name="roleIdEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.roleIdEnvVar"></a>

```java
public java.lang.String getRoleIdEnvVar();
```

- *Type:* java.lang.String

Environment variable containing the AppRole role ID. Example: 'VAULT_APPROLE_ROLE_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#role_id_env_var VaultRadarSecretManagerVaultDedicated#role_id_env_var}

---

##### `secretIdEnvVar`<sup>Required</sup> <a name="secretIdEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.secretIdEnvVar"></a>

```java
public java.lang.String getSecretIdEnvVar();
```

- *Type:* java.lang.String

Environment variable containing the AppRole secret ID. Example: 'VAULT_APPROLE_SECRET_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#secret_id_env_var VaultRadarSecretManagerVaultDedicated#secret_id_env_var}

---

### VaultRadarSecretManagerVaultDedicatedConfig <a name="VaultRadarSecretManagerVaultDedicatedConfig" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_secret_manager_vault_dedicated.VaultRadarSecretManagerVaultDedicatedConfig;

VaultRadarSecretManagerVaultDedicatedConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .vaultUrl(java.lang.String)
//  .accessReadWrite(java.lang.Boolean|IResolvable)
//  .approlePush(VaultRadarSecretManagerVaultDedicatedApprolePush)
//  .kubernetes(VaultRadarSecretManagerVaultDedicatedKubernetes)
//  .projectId(java.lang.String)
//  .token(VaultRadarSecretManagerVaultDedicatedToken)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.vaultUrl">vaultUrl</a></code> | <code>java.lang.String</code> | Specify the URL of the Vault instance without protocol. Example: 'acme-public-vault-abc.def.z1.hashicorp.cloud:8200'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.accessReadWrite">accessReadWrite</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Indicates if the auth method has read and write access to the secrets engine. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.approlePush">approlePush</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a></code> | Configuration for AppRole Push-based authentication. Only one authentication method may be configured. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a></code> | Configuration for Kubernetes-based authentication. Only one authentication method may be configured. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where Vault Radar is located. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.token">token</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a></code> | Configuration for token-based authentication. Only one authentication method may be configured. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vaultUrl`<sup>Required</sup> <a name="vaultUrl" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.vaultUrl"></a>

```java
public java.lang.String getVaultUrl();
```

- *Type:* java.lang.String

Specify the URL of the Vault instance without protocol. Example: 'acme-public-vault-abc.def.z1.hashicorp.cloud:8200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#vault_url VaultRadarSecretManagerVaultDedicated#vault_url}

---

##### `accessReadWrite`<sup>Optional</sup> <a name="accessReadWrite" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.accessReadWrite"></a>

```java
public java.lang.Boolean|IResolvable getAccessReadWrite();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Indicates if the auth method has read and write access to the secrets engine.

Defaults to false. Set this to true if you want to copy secrets to this secret manager as part of remediation process. (see https://developer.hashicorp.com/hcp/docs/vault-radar/remediate-secrets/copy-secrets)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#access_read_write VaultRadarSecretManagerVaultDedicated#access_read_write}

---

##### `approlePush`<sup>Optional</sup> <a name="approlePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.approlePush"></a>

```java
public VaultRadarSecretManagerVaultDedicatedApprolePush getApprolePush();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

Configuration for AppRole Push-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#approle_push VaultRadarSecretManagerVaultDedicated#approle_push}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.kubernetes"></a>

```java
public VaultRadarSecretManagerVaultDedicatedKubernetes getKubernetes();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

Configuration for Kubernetes-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#kubernetes VaultRadarSecretManagerVaultDedicated#kubernetes}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#project_id VaultRadarSecretManagerVaultDedicated#project_id}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.token"></a>

```java
public VaultRadarSecretManagerVaultDedicatedToken getToken();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

Configuration for token-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#token VaultRadarSecretManagerVaultDedicated#token}

---

### VaultRadarSecretManagerVaultDedicatedKubernetes <a name="VaultRadarSecretManagerVaultDedicatedKubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_secret_manager_vault_dedicated.VaultRadarSecretManagerVaultDedicatedKubernetes;

VaultRadarSecretManagerVaultDedicatedKubernetes.builder()
    .mountPath(java.lang.String)
    .roleName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Mount path where the Kubernetes auth method is enabled in Vault. Example 'kubernetes'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Kubernetes authentication role configured in Vault.  Example 'vault-radar-role'. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Mount path where the Kubernetes auth method is enabled in Vault. Example 'kubernetes'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#mount_path VaultRadarSecretManagerVaultDedicated#mount_path}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Kubernetes authentication role configured in Vault.  Example 'vault-radar-role'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#role_name VaultRadarSecretManagerVaultDedicated#role_name}

---

### VaultRadarSecretManagerVaultDedicatedToken <a name="VaultRadarSecretManagerVaultDedicatedToken" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_secret_manager_vault_dedicated.VaultRadarSecretManagerVaultDedicatedToken;

VaultRadarSecretManagerVaultDedicatedToken.builder()
    .tokenEnvVar(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken.property.tokenEnvVar">tokenEnvVar</a></code> | <code>java.lang.String</code> | Environment variable name containing the Vault token. Example: 'VAULT_TOKEN'. |

---

##### `tokenEnvVar`<sup>Required</sup> <a name="tokenEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken.property.tokenEnvVar"></a>

```java
public java.lang.String getTokenEnvVar();
```

- *Type:* java.lang.String

Environment variable name containing the Vault token. Example: 'VAULT_TOKEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#token_env_var VaultRadarSecretManagerVaultDedicated#token_env_var}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference <a name="VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_secret_manager_vault_dedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference;

new VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVarInput">roleIdEnvVarInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVarInput">secretIdEnvVarInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVar">roleIdEnvVar</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVar">secretIdEnvVar</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `roleIdEnvVarInput`<sup>Optional</sup> <a name="roleIdEnvVarInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVarInput"></a>

```java
public java.lang.String getRoleIdEnvVarInput();
```

- *Type:* java.lang.String

---

##### `secretIdEnvVarInput`<sup>Optional</sup> <a name="secretIdEnvVarInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVarInput"></a>

```java
public java.lang.String getSecretIdEnvVarInput();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `roleIdEnvVar`<sup>Required</sup> <a name="roleIdEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVar"></a>

```java
public java.lang.String getRoleIdEnvVar();
```

- *Type:* java.lang.String

---

##### `secretIdEnvVar`<sup>Required</sup> <a name="secretIdEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVar"></a>

```java
public java.lang.String getSecretIdEnvVar();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.internalValue"></a>

```java
public IResolvable|VaultRadarSecretManagerVaultDedicatedApprolePush getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

---


### VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference <a name="VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_secret_manager_vault_dedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference;

new VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.internalValue"></a>

```java
public IResolvable|VaultRadarSecretManagerVaultDedicatedKubernetes getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

---


### VaultRadarSecretManagerVaultDedicatedTokenOutputReference <a name="VaultRadarSecretManagerVaultDedicatedTokenOutputReference" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_secret_manager_vault_dedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference;

new VaultRadarSecretManagerVaultDedicatedTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVarInput">tokenEnvVarInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVar">tokenEnvVar</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tokenEnvVarInput`<sup>Optional</sup> <a name="tokenEnvVarInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVarInput"></a>

```java
public java.lang.String getTokenEnvVarInput();
```

- *Type:* java.lang.String

---

##### `tokenEnvVar`<sup>Required</sup> <a name="tokenEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVar"></a>

```java
public java.lang.String getTokenEnvVar();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.internalValue"></a>

```java
public IResolvable|VaultRadarSecretManagerVaultDedicatedToken getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

---



