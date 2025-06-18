# `vaultSecretsIntegrationAzure` Submodule <a name="`vaultSecretsIntegrationAzure` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationAzure <a name="VaultSecretsIntegrationAzure" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure hcp_vault_secrets_integration_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_azure.VaultSecretsIntegrationAzure;

VaultSecretsIntegrationAzure.Builder.create(Construct scope, java.lang.String id)
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
//  .clientSecret(VaultSecretsIntegrationAzureClientSecretA)
//  .federatedWorkloadIdentity(VaultSecretsIntegrationAzureFederatedWorkloadIdentityA)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a></code> | Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.federatedWorkloadIdentity">federatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a></code> | (Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.capabilities"></a>

- *Type:* java.util.List<java.lang.String>

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#capabilities VaultSecretsIntegrationAzure#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#name VaultSecretsIntegrationAzure#name}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.clientSecret"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a>

Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#client_secret VaultSecretsIntegrationAzure#client_secret}

---

##### `federatedWorkloadIdentity`<sup>Optional</sup> <a name="federatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.federatedWorkloadIdentity"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a>

(Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#federated_workload_identity VaultSecretsIntegrationAzure#federated_workload_identity}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#project_id VaultSecretsIntegrationAzure#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putClientSecret">putClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putFederatedWorkloadIdentity">putFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetFederatedWorkloadIdentity">resetFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientSecret` <a name="putClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putClientSecret"></a>

```java
public void putClientSecret(VaultSecretsIntegrationAzureClientSecretA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a>

---

##### `putFederatedWorkloadIdentity` <a name="putFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putFederatedWorkloadIdentity"></a>

```java
public void putFederatedWorkloadIdentity(VaultSecretsIntegrationAzureFederatedWorkloadIdentityA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putFederatedWorkloadIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a>

---

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetFederatedWorkloadIdentity` <a name="resetFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetFederatedWorkloadIdentity"></a>

```java
public void resetFederatedWorkloadIdentity()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationAzure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_azure.VaultSecretsIntegrationAzure;

VaultSecretsIntegrationAzure.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_azure.VaultSecretsIntegrationAzure;

VaultSecretsIntegrationAzure.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_azure.VaultSecretsIntegrationAzure;

VaultSecretsIntegrationAzure.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_azure.VaultSecretsIntegrationAzure;

VaultSecretsIntegrationAzure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VaultSecretsIntegrationAzure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VaultSecretsIntegrationAzure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VaultSecretsIntegrationAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VaultSecretsIntegrationAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference">VaultSecretsIntegrationAzureClientSecretAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.federatedWorkloadIdentity">federatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference">VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.capabilitiesInput">capabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.clientSecretInput">clientSecretInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.federatedWorkloadIdentityInput">federatedWorkloadIdentityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.clientSecret"></a>

```java
public VaultSecretsIntegrationAzureClientSecretAOutputReference getClientSecret();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference">VaultSecretsIntegrationAzureClientSecretAOutputReference</a>

---

##### `federatedWorkloadIdentity`<sup>Required</sup> <a name="federatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.federatedWorkloadIdentity"></a>

```java
public VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference getFederatedWorkloadIdentity();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference">VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference</a>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.capabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.clientSecretInput"></a>

```java
public java.lang.Object getClientSecretInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a>

---

##### `federatedWorkloadIdentityInput`<sup>Optional</sup> <a name="federatedWorkloadIdentityInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.federatedWorkloadIdentityInput"></a>

```java
public java.lang.Object getFederatedWorkloadIdentityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationAzureClientSecretA <a name="VaultSecretsIntegrationAzureClientSecretA" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_azure.VaultSecretsIntegrationAzureClientSecretA;

VaultSecretsIntegrationAzureClientSecretA.builder()
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Azure client ID corresponding to the Azure application. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Secret value corresponding to the Azure client secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Azure tenant ID corresponding to the Azure application. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#client_id VaultSecretsIntegrationAzure#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Secret value corresponding to the Azure client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#client_secret VaultSecretsIntegrationAzure#client_secret}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#tenant_id VaultSecretsIntegrationAzure#tenant_id}

---

### VaultSecretsIntegrationAzureConfig <a name="VaultSecretsIntegrationAzureConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_azure.VaultSecretsIntegrationAzureConfig;

VaultSecretsIntegrationAzureConfig.builder()
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
//  .clientSecret(VaultSecretsIntegrationAzureClientSecretA)
//  .federatedWorkloadIdentity(VaultSecretsIntegrationAzureFederatedWorkloadIdentityA)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.name">name</a></code> | <code>java.lang.String</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a></code> | Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.federatedWorkloadIdentity">federatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a></code> | (Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#capabilities VaultSecretsIntegrationAzure#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#name VaultSecretsIntegrationAzure#name}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.clientSecret"></a>

```java
public VaultSecretsIntegrationAzureClientSecretA getClientSecret();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a>

Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#client_secret VaultSecretsIntegrationAzure#client_secret}

---

##### `federatedWorkloadIdentity`<sup>Optional</sup> <a name="federatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.federatedWorkloadIdentity"></a>

```java
public VaultSecretsIntegrationAzureFederatedWorkloadIdentityA getFederatedWorkloadIdentity();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a>

(Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#federated_workload_identity VaultSecretsIntegrationAzure#federated_workload_identity}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#project_id VaultSecretsIntegrationAzure#project_id}

---

### VaultSecretsIntegrationAzureFederatedWorkloadIdentityA <a name="VaultSecretsIntegrationAzureFederatedWorkloadIdentityA" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_azure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA;

VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.builder()
    .audience(java.lang.String)
    .clientId(java.lang.String)
    .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.audience">audience</a></code> | <code>java.lang.String</code> | Audience configured on the Azure federated identity credentials to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Azure client ID corresponding to the Azure application. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Azure tenant ID corresponding to the Azure application. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Audience configured on the Azure federated identity credentials to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#audience VaultSecretsIntegrationAzure#audience}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#client_id VaultSecretsIntegrationAzure#client_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.107.0/docs/resources/vault_secrets_integration_azure#tenant_id VaultSecretsIntegrationAzure#tenant_id}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationAzureClientSecretAOutputReference <a name="VaultSecretsIntegrationAzureClientSecretAOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_azure.VaultSecretsIntegrationAzureClientSecretAOutputReference;

new VaultSecretsIntegrationAzureClientSecretAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a>

---


### VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference <a name="VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_azure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference;

new VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a>

---



