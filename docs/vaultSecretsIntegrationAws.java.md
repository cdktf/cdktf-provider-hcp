# `vaultSecretsIntegrationAws` Submodule <a name="`vaultSecretsIntegrationAws` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationAws <a name="VaultSecretsIntegrationAws" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws hcp_vault_secrets_integration_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_aws.VaultSecretsIntegrationAws;

VaultSecretsIntegrationAws.Builder.create(Construct scope, java.lang.String id)
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
    .capabilities(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .accessKeys(VaultSecretsIntegrationAwsAccessKeys)
//  .federatedWorkloadIdentity(VaultSecretsIntegrationAwsFederatedWorkloadIdentity)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.accessKeys">accessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a></code> | AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.federatedWorkloadIdentity">federatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.capabilities"></a>

- *Type:* java.util.List<java.lang.String>

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#capabilities VaultSecretsIntegrationAws#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#name VaultSecretsIntegrationAws#name}

---

##### `accessKeys`<sup>Optional</sup> <a name="accessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.accessKeys"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#access_keys VaultSecretsIntegrationAws#access_keys}

---

##### `federatedWorkloadIdentity`<sup>Optional</sup> <a name="federatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.federatedWorkloadIdentity"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#federated_workload_identity VaultSecretsIntegrationAws#federated_workload_identity}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#project_id VaultSecretsIntegrationAws#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putAccessKeys">putAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putFederatedWorkloadIdentity">putFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetAccessKeys">resetAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetFederatedWorkloadIdentity">resetFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessKeys` <a name="putAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putAccessKeys"></a>

```java
public void putAccessKeys(VaultSecretsIntegrationAwsAccessKeys value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putAccessKeys.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

---

##### `putFederatedWorkloadIdentity` <a name="putFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putFederatedWorkloadIdentity"></a>

```java
public void putFederatedWorkloadIdentity(VaultSecretsIntegrationAwsFederatedWorkloadIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putFederatedWorkloadIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

---

##### `resetAccessKeys` <a name="resetAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetAccessKeys"></a>

```java
public void resetAccessKeys()
```

##### `resetFederatedWorkloadIdentity` <a name="resetFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetFederatedWorkloadIdentity"></a>

```java
public void resetFederatedWorkloadIdentity()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationAws resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_aws.VaultSecretsIntegrationAws;

VaultSecretsIntegrationAws.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_aws.VaultSecretsIntegrationAws;

VaultSecretsIntegrationAws.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_aws.VaultSecretsIntegrationAws;

VaultSecretsIntegrationAws.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_aws.VaultSecretsIntegrationAws;

VaultSecretsIntegrationAws.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VaultSecretsIntegrationAws.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VaultSecretsIntegrationAws resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VaultSecretsIntegrationAws to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VaultSecretsIntegrationAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.accessKeys">accessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference">VaultSecretsIntegrationAwsAccessKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.federatedWorkloadIdentity">federatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.accessKeysInput">accessKeysInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.capabilitiesInput">capabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.federatedWorkloadIdentityInput">federatedWorkloadIdentityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessKeys`<sup>Required</sup> <a name="accessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.accessKeys"></a>

```java
public VaultSecretsIntegrationAwsAccessKeysOutputReference getAccessKeys();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference">VaultSecretsIntegrationAwsAccessKeysOutputReference</a>

---

##### `federatedWorkloadIdentity`<sup>Required</sup> <a name="federatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.federatedWorkloadIdentity"></a>

```java
public VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference getFederatedWorkloadIdentity();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference</a>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `accessKeysInput`<sup>Optional</sup> <a name="accessKeysInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.accessKeysInput"></a>

```java
public java.lang.Object getAccessKeysInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.capabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `federatedWorkloadIdentityInput`<sup>Optional</sup> <a name="federatedWorkloadIdentityInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.federatedWorkloadIdentityInput"></a>

```java
public java.lang.Object getFederatedWorkloadIdentityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationAwsAccessKeys <a name="VaultSecretsIntegrationAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_aws.VaultSecretsIntegrationAwsAccessKeys;

VaultSecretsIntegrationAwsAccessKeys.builder()
    .accessKeyId(java.lang.String)
    .secretAccessKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | Key ID used with the secret key to authenticate against the target AWS account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | Secret key used with the key ID to authenticate against the target AWS account. |

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

Key ID used with the secret key to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#access_key_id VaultSecretsIntegrationAws#access_key_id}

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

Secret key used with the key ID to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#secret_access_key VaultSecretsIntegrationAws#secret_access_key}

---

### VaultSecretsIntegrationAwsConfig <a name="VaultSecretsIntegrationAwsConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_aws.VaultSecretsIntegrationAwsConfig;

VaultSecretsIntegrationAwsConfig.builder()
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
    .capabilities(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .accessKeys(VaultSecretsIntegrationAwsAccessKeys)
//  .federatedWorkloadIdentity(VaultSecretsIntegrationAwsFederatedWorkloadIdentity)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.name">name</a></code> | <code>java.lang.String</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.accessKeys">accessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a></code> | AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.federatedWorkloadIdentity">federatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#capabilities VaultSecretsIntegrationAws#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#name VaultSecretsIntegrationAws#name}

---

##### `accessKeys`<sup>Optional</sup> <a name="accessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.accessKeys"></a>

```java
public VaultSecretsIntegrationAwsAccessKeys getAccessKeys();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#access_keys VaultSecretsIntegrationAws#access_keys}

---

##### `federatedWorkloadIdentity`<sup>Optional</sup> <a name="federatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.federatedWorkloadIdentity"></a>

```java
public VaultSecretsIntegrationAwsFederatedWorkloadIdentity getFederatedWorkloadIdentity();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#federated_workload_identity VaultSecretsIntegrationAws#federated_workload_identity}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#project_id VaultSecretsIntegrationAws#project_id}

---

### VaultSecretsIntegrationAwsFederatedWorkloadIdentity <a name="VaultSecretsIntegrationAwsFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_aws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity;

VaultSecretsIntegrationAwsFederatedWorkloadIdentity.builder()
    .audience(java.lang.String)
    .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.audience">audience</a></code> | <code>java.lang.String</code> | Audience configured on the AWS IAM identity provider to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Audience configured on the AWS IAM identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#audience VaultSecretsIntegrationAws#audience}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_integration_aws#role_arn VaultSecretsIntegrationAws#role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationAwsAccessKeysOutputReference <a name="VaultSecretsIntegrationAwsAccessKeysOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_aws.VaultSecretsIntegrationAwsAccessKeysOutputReference;

new VaultSecretsIntegrationAwsAccessKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyIdInput"></a>

```java
public java.lang.String getAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKeyInput"></a>

```java
public java.lang.String getSecretAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

---


### VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference <a name="VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_aws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference;

new VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

---



