# `vaultSecretsDynamicSecret` Submodule <a name="`vaultSecretsDynamicSecret` Submodule" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsDynamicSecret <a name="VaultSecretsDynamicSecret" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret hcp_vault_secrets_dynamic_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_dynamic_secret.VaultSecretsDynamicSecret;

VaultSecretsDynamicSecret.Builder.create(Construct scope, java.lang.String id)
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
    .appName(java.lang.String)
    .integrationName(java.lang.String)
    .name(java.lang.String)
    .secretProvider(java.lang.String)
//  .awsAssumeRole(VaultSecretsDynamicSecretAwsAssumeRole)
//  .defaultTtl(java.lang.String)
//  .gcpImpersonateServiceAccount(VaultSecretsDynamicSecretGcpImpersonateServiceAccount)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.appName">appName</a></code> | <code>java.lang.String</code> | Vault Secrets application name that owns the secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.integrationName">integrationName</a></code> | <code>java.lang.String</code> | The Vault Secrets integration name with the capability to manage the secret's lifecycle. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The Vault Secrets secret name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.secretProvider">secretProvider</a></code> | <code>java.lang.String</code> | The third party platform the dynamic credentials give access to. One of `aws` or `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.awsAssumeRole">awsAssumeRole</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole">VaultSecretsDynamicSecretAwsAssumeRole</a></code> | AWS configuration to generate dynamic credentials by assuming an IAM role. Required if `secret_provider` is `aws`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.defaultTtl">defaultTtl</a></code> | <code>java.lang.String</code> | TTL the generated credentials will be valid for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.gcpImpersonateServiceAccount">gcpImpersonateServiceAccount</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount">VaultSecretsDynamicSecretGcpImpersonateServiceAccount</a></code> | GCP configuration to generate dynamic credentials by impersonating a service account. Required if `secret_provider` is `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.appName"></a>

- *Type:* java.lang.String

Vault Secrets application name that owns the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#app_name VaultSecretsDynamicSecret#app_name}

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.integrationName"></a>

- *Type:* java.lang.String

The Vault Secrets integration name with the capability to manage the secret's lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#integration_name VaultSecretsDynamicSecret#integration_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The Vault Secrets secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#name VaultSecretsDynamicSecret#name}

---

##### `secretProvider`<sup>Required</sup> <a name="secretProvider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.secretProvider"></a>

- *Type:* java.lang.String

The third party platform the dynamic credentials give access to. One of `aws` or `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#secret_provider VaultSecretsDynamicSecret#secret_provider}

---

##### `awsAssumeRole`<sup>Optional</sup> <a name="awsAssumeRole" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.awsAssumeRole"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole">VaultSecretsDynamicSecretAwsAssumeRole</a>

AWS configuration to generate dynamic credentials by assuming an IAM role. Required if `secret_provider` is `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#aws_assume_role VaultSecretsDynamicSecret#aws_assume_role}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.defaultTtl"></a>

- *Type:* java.lang.String

TTL the generated credentials will be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#default_ttl VaultSecretsDynamicSecret#default_ttl}

---

##### `gcpImpersonateServiceAccount`<sup>Optional</sup> <a name="gcpImpersonateServiceAccount" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.gcpImpersonateServiceAccount"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount">VaultSecretsDynamicSecretGcpImpersonateServiceAccount</a>

GCP configuration to generate dynamic credentials by impersonating a service account. Required if `secret_provider` is `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#gcp_impersonate_service_account VaultSecretsDynamicSecret#gcp_impersonate_service_account}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#project_id VaultSecretsDynamicSecret#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.putAwsAssumeRole">putAwsAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.putGcpImpersonateServiceAccount">putGcpImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetAwsAssumeRole">resetAwsAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetGcpImpersonateServiceAccount">resetGcpImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsAssumeRole` <a name="putAwsAssumeRole" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.putAwsAssumeRole"></a>

```java
public void putAwsAssumeRole(VaultSecretsDynamicSecretAwsAssumeRole value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.putAwsAssumeRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole">VaultSecretsDynamicSecretAwsAssumeRole</a>

---

##### `putGcpImpersonateServiceAccount` <a name="putGcpImpersonateServiceAccount" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.putGcpImpersonateServiceAccount"></a>

```java
public void putGcpImpersonateServiceAccount(VaultSecretsDynamicSecretGcpImpersonateServiceAccount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.putGcpImpersonateServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount">VaultSecretsDynamicSecretGcpImpersonateServiceAccount</a>

---

##### `resetAwsAssumeRole` <a name="resetAwsAssumeRole" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetAwsAssumeRole"></a>

```java
public void resetAwsAssumeRole()
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetDefaultTtl"></a>

```java
public void resetDefaultTtl()
```

##### `resetGcpImpersonateServiceAccount` <a name="resetGcpImpersonateServiceAccount" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetGcpImpersonateServiceAccount"></a>

```java
public void resetGcpImpersonateServiceAccount()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsDynamicSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_dynamic_secret.VaultSecretsDynamicSecret;

VaultSecretsDynamicSecret.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_dynamic_secret.VaultSecretsDynamicSecret;

VaultSecretsDynamicSecret.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_dynamic_secret.VaultSecretsDynamicSecret;

VaultSecretsDynamicSecret.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_dynamic_secret.VaultSecretsDynamicSecret;

VaultSecretsDynamicSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VaultSecretsDynamicSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VaultSecretsDynamicSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VaultSecretsDynamicSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VaultSecretsDynamicSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsDynamicSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.awsAssumeRole">awsAssumeRole</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference">VaultSecretsDynamicSecretAwsAssumeRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.gcpImpersonateServiceAccount">gcpImpersonateServiceAccount</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference">VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.appNameInput">appNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.awsAssumeRoleInput">awsAssumeRoleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole">VaultSecretsDynamicSecretAwsAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.defaultTtlInput">defaultTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.gcpImpersonateServiceAccountInput">gcpImpersonateServiceAccountInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount">VaultSecretsDynamicSecretGcpImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.integrationNameInput">integrationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.secretProviderInput">secretProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.appName">appName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.integrationName">integrationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.secretProvider">secretProvider</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsAssumeRole`<sup>Required</sup> <a name="awsAssumeRole" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.awsAssumeRole"></a>

```java
public VaultSecretsDynamicSecretAwsAssumeRoleOutputReference getAwsAssumeRole();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference">VaultSecretsDynamicSecretAwsAssumeRoleOutputReference</a>

---

##### `gcpImpersonateServiceAccount`<sup>Required</sup> <a name="gcpImpersonateServiceAccount" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.gcpImpersonateServiceAccount"></a>

```java
public VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference getGcpImpersonateServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference">VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference</a>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `appNameInput`<sup>Optional</sup> <a name="appNameInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.appNameInput"></a>

```java
public java.lang.String getAppNameInput();
```

- *Type:* java.lang.String

---

##### `awsAssumeRoleInput`<sup>Optional</sup> <a name="awsAssumeRoleInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.awsAssumeRoleInput"></a>

```java
public java.lang.Object getAwsAssumeRoleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole">VaultSecretsDynamicSecretAwsAssumeRole</a>

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.defaultTtlInput"></a>

```java
public java.lang.String getDefaultTtlInput();
```

- *Type:* java.lang.String

---

##### `gcpImpersonateServiceAccountInput`<sup>Optional</sup> <a name="gcpImpersonateServiceAccountInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.gcpImpersonateServiceAccountInput"></a>

```java
public java.lang.Object getGcpImpersonateServiceAccountInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount">VaultSecretsDynamicSecretGcpImpersonateServiceAccount</a>

---

##### `integrationNameInput`<sup>Optional</sup> <a name="integrationNameInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.integrationNameInput"></a>

```java
public java.lang.String getIntegrationNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `secretProviderInput`<sup>Optional</sup> <a name="secretProviderInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.secretProviderInput"></a>

```java
public java.lang.String getSecretProviderInput();
```

- *Type:* java.lang.String

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.defaultTtl"></a>

```java
public java.lang.String getDefaultTtl();
```

- *Type:* java.lang.String

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.integrationName"></a>

```java
public java.lang.String getIntegrationName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `secretProvider`<sup>Required</sup> <a name="secretProvider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.secretProvider"></a>

```java
public java.lang.String getSecretProvider();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecret.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsDynamicSecretAwsAssumeRole <a name="VaultSecretsDynamicSecretAwsAssumeRole" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_dynamic_secret.VaultSecretsDynamicSecretAwsAssumeRole;

VaultSecretsDynamicSecretAwsAssumeRole.builder()
    .iamRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | AWS IAM role ARN to assume when generating credentials. |

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

AWS IAM role ARN to assume when generating credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#iam_role_arn VaultSecretsDynamicSecret#iam_role_arn}

---

### VaultSecretsDynamicSecretConfig <a name="VaultSecretsDynamicSecretConfig" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_dynamic_secret.VaultSecretsDynamicSecretConfig;

VaultSecretsDynamicSecretConfig.builder()
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
    .appName(java.lang.String)
    .integrationName(java.lang.String)
    .name(java.lang.String)
    .secretProvider(java.lang.String)
//  .awsAssumeRole(VaultSecretsDynamicSecretAwsAssumeRole)
//  .defaultTtl(java.lang.String)
//  .gcpImpersonateServiceAccount(VaultSecretsDynamicSecretGcpImpersonateServiceAccount)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.appName">appName</a></code> | <code>java.lang.String</code> | Vault Secrets application name that owns the secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.integrationName">integrationName</a></code> | <code>java.lang.String</code> | The Vault Secrets integration name with the capability to manage the secret's lifecycle. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.name">name</a></code> | <code>java.lang.String</code> | The Vault Secrets secret name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.secretProvider">secretProvider</a></code> | <code>java.lang.String</code> | The third party platform the dynamic credentials give access to. One of `aws` or `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.awsAssumeRole">awsAssumeRole</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole">VaultSecretsDynamicSecretAwsAssumeRole</a></code> | AWS configuration to generate dynamic credentials by assuming an IAM role. Required if `secret_provider` is `aws`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.String</code> | TTL the generated credentials will be valid for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.gcpImpersonateServiceAccount">gcpImpersonateServiceAccount</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount">VaultSecretsDynamicSecretGcpImpersonateServiceAccount</a></code> | GCP configuration to generate dynamic credentials by impersonating a service account. Required if `secret_provider` is `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

Vault Secrets application name that owns the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#app_name VaultSecretsDynamicSecret#app_name}

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.integrationName"></a>

```java
public java.lang.String getIntegrationName();
```

- *Type:* java.lang.String

The Vault Secrets integration name with the capability to manage the secret's lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#integration_name VaultSecretsDynamicSecret#integration_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The Vault Secrets secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#name VaultSecretsDynamicSecret#name}

---

##### `secretProvider`<sup>Required</sup> <a name="secretProvider" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.secretProvider"></a>

```java
public java.lang.String getSecretProvider();
```

- *Type:* java.lang.String

The third party platform the dynamic credentials give access to. One of `aws` or `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#secret_provider VaultSecretsDynamicSecret#secret_provider}

---

##### `awsAssumeRole`<sup>Optional</sup> <a name="awsAssumeRole" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.awsAssumeRole"></a>

```java
public VaultSecretsDynamicSecretAwsAssumeRole getAwsAssumeRole();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole">VaultSecretsDynamicSecretAwsAssumeRole</a>

AWS configuration to generate dynamic credentials by assuming an IAM role. Required if `secret_provider` is `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#aws_assume_role VaultSecretsDynamicSecret#aws_assume_role}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.defaultTtl"></a>

```java
public java.lang.String getDefaultTtl();
```

- *Type:* java.lang.String

TTL the generated credentials will be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#default_ttl VaultSecretsDynamicSecret#default_ttl}

---

##### `gcpImpersonateServiceAccount`<sup>Optional</sup> <a name="gcpImpersonateServiceAccount" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.gcpImpersonateServiceAccount"></a>

```java
public VaultSecretsDynamicSecretGcpImpersonateServiceAccount getGcpImpersonateServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount">VaultSecretsDynamicSecretGcpImpersonateServiceAccount</a>

GCP configuration to generate dynamic credentials by impersonating a service account. Required if `secret_provider` is `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#gcp_impersonate_service_account VaultSecretsDynamicSecret#gcp_impersonate_service_account}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#project_id VaultSecretsDynamicSecret#project_id}

---

### VaultSecretsDynamicSecretGcpImpersonateServiceAccount <a name="VaultSecretsDynamicSecretGcpImpersonateServiceAccount" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_dynamic_secret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount;

VaultSecretsDynamicSecretGcpImpersonateServiceAccount.builder()
    .serviceAccountEmail(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | GCP service account email to impersonate. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

GCP service account email to impersonate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_secrets_dynamic_secret#service_account_email VaultSecretsDynamicSecret#service_account_email}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsDynamicSecretAwsAssumeRoleOutputReference <a name="VaultSecretsDynamicSecretAwsAssumeRoleOutputReference" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_dynamic_secret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference;

new VaultSecretsDynamicSecretAwsAssumeRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole">VaultSecretsDynamicSecretAwsAssumeRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRoleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretAwsAssumeRole">VaultSecretsDynamicSecretAwsAssumeRole</a>

---


### VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference <a name="VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_dynamic_secret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference;

new VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount">VaultSecretsDynamicSecretGcpImpersonateServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsDynamicSecret.VaultSecretsDynamicSecretGcpImpersonateServiceAccount">VaultSecretsDynamicSecretGcpImpersonateServiceAccount</a>

---



